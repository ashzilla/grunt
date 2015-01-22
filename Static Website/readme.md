# Static Website

Designing and testing emails is a pain. HTML tables, inline CSS, various devices and clients to test, and varying support for the latest web standards.

This grunt task helps simplify things at the design stage.

1. Compiles your SCSS to CSS
2. Compiles your Jade to HTML
3. Refreshes browser

## Requirements

* Node.js - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Ruby - [Install ruby with RVM](https://rvm.io/rvm/install)
* LiveReload extension [Download here](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
* grunt-contrib-jade (`npm install grunt-contrib-jade --save-dev`) 

## Getting started

1. Open Terminal and go to your working folder
2. Run `npm install` on the folder
3. Run `grunt` to watch for changes to files in the src folder

If you haven't used [Grunt](http://gruntjs.com/) before check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

## How it works
files and file names will differ


### HTML
This project uses [Jade](http://jade-lang.com/). You don't need to touch the .html files, these are compiled automatically.

For changes to HTML, modify the .jade files.

### CSS

This project uses [SCSS](http://sass-lang.com/). You don't need to touch the .css files, these are compiled automatically.

For changes to CSS, modify the .scss files.