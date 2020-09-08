[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/064xp/solvector">
    <img src="images/logo.svg" alt="Logo" height="80">
  </a>

  <p align="center">
    Linear algebra toolkit with ease of use in mind.
    <br />
    <a href="https://www.solvector.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/064xp/solvector/issues">Report Bug</a>
    ·
    <a href="https://github.com/064xp/solvector/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

Solvector is a toolkit for operating with matrices in a through an easy to use and clean interface.
It currently supports a variety of common operations, see [Usage](#usage) for a list of currently supported operations.

[![Solvector Screen Shot][product-screenshot]](https://solvector.netlify.app)

### Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/064xp/solvector.git
```

2. Install NPM packages

```sh
npm install
```

3. Start development server

```sh
npm start
```

<!-- USAGE EXAMPLES -->

## Usage

Solvector can solve a variety of matrix operations, as of now it supports:

- Gauss Jordan elimination
- Matrix **addition**
- Matrix **subtraction**
- Matrix **multiplication**
- Calculating **determinant** of a matrix
- Calculating **trace** of a Matrix
- Calculating **inverse** of a Matrix

<img src="/images/operation1.png" alt="Solvector usage screenshot" width="500">
<br>
<br>
Define your matrices up top and write the expression you want to solve in the text box below.

Functions for the matrix operations can be found in [/src/functions/operations/matrixOperations.js](https://github.com/064xp/solvector/blob/master/src/functions/operations/matrixOperations.js)

Functions for related to Gauss Jordan elimination can be found in [/src/functions/operations/gaussJordan.js](https://github.com/064xp/solvector/blob/master/src/functions/operations/gaussJordan.js)

## Contributing

Solvector is open source and thus contributions are welcome, if you have any questions feel free to make a new issue.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/064xp/solvector.svg?style=flat-square
[contributors-url]: https://github.com/064xp/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/064xp/solvector.svg?style=flat-square
[forks-url]: https://github.com/064xp/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/064xp/solvector.svg?style=flat-square
[stars-url]: https://github.com/064xp/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/064xp/solvector.svg?style=flat-square
[issues-url]: https://github.com/064xp/repo/issues
[license-shield]: https://img.shields.io/github/license/064xp/solvector.svg?style=flat-square
[license-url]: https://github.com/064xp/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[product-screenshot]: images/screenshot1.png
