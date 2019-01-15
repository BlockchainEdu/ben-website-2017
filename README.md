# Blockchain Education Network (BEN) Website

## Overview

Welcome to the code repository for the [BEN Website](https://www.blockchainedu.org)!

This project was made with [Materialize](http://materializecss.com/) (not version 1.0), a framework based on Google's Material Design. If you are unfamiliar with Materialize, we suggest you read through the documentation. Pay attention to all of the components and styles available to you.

## Structure

Each folder is divided into parent links, its sub-links and the SCSS / compiled CSS that goes along with it.

**Repeated sections, like the _Footer_ and _Header_ are in the *Components* section and are loaded through `js/main.js`.**

## Development

### Prerequisites

  * Knowledge of SCSS and CSS
  * Use of the CLI
  * How to _FORK_ GitHub repositories, close issues, make decent commits, and pull requests
  * Use of a text editor like Atom or Sublime
  * [Node](https://nodejs.org), preferably 8.11.1 LTS or greater

### Developing

Technically, you could open up the index page and follow from there, but if you'd like for things to update on demand to make development easier, follow these steps:

#### A. Preparing the repository

1. Fork the repo at `https://github.com/blockchainedu/ben-website`

2. Clone your repo:
```
$ git clone git@github.com:<username>/ben-website.git
```

2. Create a new branch:
```
$ git checkout -b develop-<some-new-feature>
```

3. Install the project's requirements:
```
$ npm install
```

4. Start the website up:
```
$ npm start
```

5. Go to http://localhost:8000 if it doesn't load automatically.


  ##### * Tip: Watching for CSS after compilation

  SCSS is a CSS preprocessing language [and the latest version of Sass (Syntactically Awesome Style Sheets) syntax], which means it makes it easier to write CSS for the front-end. You can use variables, nest selectors, create mixins, etc. You can learn more about SCSS at `http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html`.

  You will see that there are several SCSS and CSS files in the project. The CSS has been compiled from the SCSS files.

  If you're developing with `npm start`, then your scss files should be compiled into minified css files automatically.

  If you have any difficulties with setup, do not hesitate to contact us @ [tech@blockchainedu.org](mailto:tech@blockchainedu.org).


#### B. Making changes & closing issues

1. Choose an issue for the project to work on.
2. Make sure you are in your own development branch (should be titled `development-(yourName)`)
3. When you want to commit something that will close an issue, **you must use ONE of the keywords
`close`,
`closes`,
`closed`,
`fix`,
`fixes`,
`fixed`,
`resolve`,
`resolves`, OR
`resolved`
_followed by the issue number_** to close it. I.e. `Closes #10 - Add any other details here`. Learn more about closing issues at [GitHub Help - Closing Issues using Keywords](https://help.github.com/articles/closing-issues-using-keywords/)
4. When you are ready to share your changes with the organization, follow the instructions at [GitHub Help - Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/).
5. The organization will review your pull request and merge changes if approved.
6. Pat yourself on the back for contributing!

### Production

_Instructions to be updated_


Materialize
<p align="center">
  <a href="http://materializecss.com/">
    <img src="http://materializecss.com/res/materialize.svg" width="150">
  </a>
</p>

<h3 align="center">MaterializeCSS</h3>

<p align="center">
  Materialize, a CSS Framework based on material design.
  <br>
  <a href="http://materializecss.com/"><strong>-- Browse the docs --</strong></a>
  <br>
  <br>
  <a href="https://travis-ci.org/Dogfalo/materialize">
    <img src="https://travis-ci.org/Dogfalo/materialize.svg?branch=master" alt="Travis CI badge">
  </a>
  <a href="https://badge.fury.io/js/materialize-css">
    <img src="https://badge.fury.io/js/materialize-css.svg" alt="npm version badge">
  </a>
  <a href="https://cdnjs.com/libraries/materialize">
    <img src="https://img.shields.io/cdnjs/v/materialize.svg" alt="CDNJS version badge">
  </a>
  <a href="https://david-dm.org/Dogfalo/materialize">
    <img src="https://david-dm.org/Dogfalo/materialize/status.svg" alt="dependencies Status badge">
    </a>
  <a href="https://david-dm.org/Dogfalo/materialize#info=devDependencies">
    <img src="https://david-dm.org/Dogfalo/materialize/dev-status.svg" alt="devDependency Status badge">
  </a>
  <a href="https://gitter.im/Dogfalo/materialize">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="Gitter badge">
  </a>
</p>

## Table of Contents
- [Quickstart](#quickstart)
- [Documentation](#documentation)
- [Supported Browsers](#supported-browsers)
- [Changelog](#changelog)
- [Testing](#testing)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

## Quickstart:
Read the [getting started guide](http://materializecss.com/getting-started.html) for more information on how to use materialize.

- [Download the latest release](https://github.com/Dogfalo/materialize/releases/latest) of materialize directly from GitHub. ([Beta](https://github.com/Dogfalo/materialize/releases/))
- Clone the repo: `git clone https://github.com/Dogfalo/materialize.git` (Beta: `git clone -b v1-dev https://github.com/Dogfalo/materialize.git`)
- Include the files via [cdnjs](https://cdnjs.com/libraries/materialize). More [here](http://materializecss.com/getting-started.html). ([Beta](https://cdnjs.com/libraries/materialize/1.0.0-beta))
- Install with [npm](https://www.npmjs.com): `npm install materialize-css` (Beta: `npm install materialize-css@next`)
- Install with [Bower](https://bower.io): `bower install materialize` ([DEPRECATED](https://bower.io/blog/2017/how-to-migrate-away-from-bower/))
- Install with [Atmosphere](https://atmospherejs.com): `meteor add materialize:materialize` (Beta: `meteor add materialize:materialize@=1.0.0-beta`)

## Documentation
The documentation can be found at <http://materializecss.com>. To run the documentation locally on your machine, you need [Node.js](https://nodejs.org/en/) installed on your computer.

### Running documentation locally
Run these commands to set up the documentation:

```bash
git clone https://github.com/Dogfalo/materialize
cd materialize
npm install
```

Then run `grunt monitor` to compile the documentation. When it finishes, open a new browser window and navigate to `localhost:8000`. We use [BrowserSync](https://www.browsersync.io/) to display the documentation.

### Documentation for previous releases
Previous releases and their documentation are available for [download](https://github.com/Dogfalo/materialize/releases).

## Supported Browsers:
Materialize is compatible with:

- Chrome 35+
- Firefox 31+
- Safari 9+
- Opera
- Edge
- IE 11+

## Changelog
For changelogs, check out [the Releases section of materialize](https://github.com/Dogfalo/materialize/releases) or the [CHANGELOG.md](CHANGELOG.md).

## Testing
We use Jasmine as our testing framework and we're trying to write a robust test suite for our components. If you want to help, [here's a starting guide on how to write tests in Jasmine](CONTRIBUTING.md#jasmine-testing-guide).

## Contributing
Check out the [CONTRIBUTING document](CONTRIBUTING.md) in the root of the repository to learn how you can contribute. You can also browse the [help-wanted](https://github.com/Dogfalo/materialize/labels/help-wanted) tag in our issue tracker to find things to do.

## Copyright and license
Code Copyright 2018 Materialize. Code released under the MIT license.
