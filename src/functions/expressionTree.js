/*
  Dijkstra's Shunting Yard Algorithm to convert an expression
  from infix notation to postfix
  https://en.wikipedia.org/wiki/Shunting-yard_algorithm
*/
export const infixToPostfix = infix => {
  //Separate string in to tokens
  const tokens = infix.match(/(\d+|[A-Z]+|[+\-/*^()])/gim);
  let postfix = [];
  let stack = [];
  let currentToken = "";
  let temp;

  for (let i = 0; i < tokens.length; i++) {
    currentToken = tokens[i];
    if (isFunction(currentToken)) {
      stack.push(currentToken.toLowerCase());
    } else if (isAlphaNum(currentToken)) {
      postfix.push(currentToken.toUpperCase());
    } else if (currentToken === "(") {
      stack.push(currentToken);
    } else if (currentToken === ")") {
      while (stack[stack.length - 1] !== "(") {
        temp = stack.pop();
        if (temp) {
          postfix.push(temp);
        } else {
          //stack is empty
          throw new Error("There are mismatched parenthesis in the expresison");
        }
      } //end while
      stack.pop(); //Pop left parenthesis
    } else if (isOperator(currentToken)) {
      while (
        isFunction(stack[stack.length - 1]) ||
        precedence(currentToken) < precedence(stack[stack.length - 1]) ||
        (precedence(stack[stack.length - 1]) === precedence(currentToken) &&
          associative(currentToken) === "l")
      ) {
        postfix.push(stack.pop());
      } //end while
      stack.push(currentToken);
    } //end if isOperator
  } //end for each loop

  while (stack.length !== 0) {
    temp = stack.pop();
    if (temp === "(" || temp === ")") {
      throw new Error("There are mismatched parenthesis in the expresison");
    }
    postfix.push(temp);
  }
  return postfix;
};

const precedence = operator => {
  switch (operator) {
    case "^":
      return 3;
    case "*":
    case "/":
      return 2;
    case "+":
    case "-":
      return 1;
    default:
      return 0;
  }
};

const associative = operator => {
  switch (operator) {
    case "^":
      return "r";
    case "*":
    case "/":
      return "l";
    case "+":
    case "-":
      return "l";
    default:
      return 0;
  }
};

export const isOperator = char => {
  return (
    char === "+" || char === "-" || char === "*" || char === "/" || char === "^"
  );
};

const isAlphaNum = str => {
  return str.match(/[0-9a-z]+/i) !== null;
};

export const isFunction = str => {
  str = str.toLowerCase();
  //here we would define functions to look out for, example sin(), cos(), tr()
  const functions = ["tr", "inv", "det"];
  return str && functions.indexOf(str.toLowerCase()) > -1;
};

const createNewNode = value => {
  const node = {
    value: value,
    left: null,
    right: null
  };
  return node;
};

export const constructTree = postfixTokens => {
  let stack = [];

  postfixTokens.forEach(token => {
    let newNode = createNewNode(token);
    if (isOperator(token)) {
      newNode.right = stack.pop();
      newNode.left = stack.pop();
    } else if (isFunction(token)) {
      newNode.left = stack.pop();
    }
    stack.push(newNode);
  });
  return stack[0];
};
