# Blockchain Education Network (BEN) Website

## Overview

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

### Developing

Technically, you could open up the index page and follow from there, but if you'd like for things to update on demand to make development easier, follow these steps:

#### A. Preparing the repository

1. Fork the repo at `https://github.com/blockchainedu/ben-website`
2. Create a new branch with the name `develop-(yourName)`
3. Follow the instructions at `https://www.browsersync.io/` to install Browsersync
4. Once Browsersync is installed, using your CLI, *change to the directory above the cloned repository*, enter the command `browser-sync start --server 'ben-website' --files 'ben-website'` to start watching *all* files for changes
5. Open `localhost:3000` if it is not already opened

  ##### * Tip: Watching for CSS after compilation

  SCSS is a CSS preprocessing language [and the latest version of Sass (Syntactically Awesome Style Sheets) syntax], which means it makes it easier to write CSS for the front-end. You can use variables, nest selectors, create mixins, etc. You can learn more about SCSS at `http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html`.

  You will see that there are several SCSS and CSS files in the project. The CSS has been compiled from the SCSS files.

  If you are using an editor like **Atom** or **Sublime**, there are packages like [sass-autocompile](https://atom.io/packages/sass-autocompile) that will automatically compile and produce a CSS file on save. This is the easiest way to make sure your files are compiling correctly.

  _Otherwise_, you will need to start a `watch` from your CLI. Follow the instructions **[Using Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass)** to watch your files.

  If you have any difficulties with setup, do not hesitate to contact us @ [tech@blockchainedu.org](mailto:tech@blockchainedu.org).


#### B. Making changes & closing issues

1. Choose an issue for the project to work on.
2. Make sure you are in your own development branch (should be titled `development-(yourName)`)
3. When you want to commit something that will close an issue, **you must use ONE of the keywords
`close`
`closes`
`closed`
`fix`
`fixes`
`fixed`
`resolve`
`resolves` OR
`resolved`
_followed by the issue number_** to close it. I.e. `Closes #10 - Add any other details here`. Learn more about closing issues at [GitHub Help - Closing Issues using Keywords](https://help.github.com/articles/closing-issues-using-keywords/)
4. When you are ready to share your changes with the organization, follow the instructions at [GitHub Help - Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/).
5. The organization will review your pull request and merge changes if approved.
6. Pat yourself on the back for contributing!

### Production

_Instructions to be updated_
