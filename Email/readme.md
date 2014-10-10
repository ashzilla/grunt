# Grunt Email Design Workflow

Designing and testing emails is a pain. HTML tables, inline CSS, various devices and clients to test, and varying support for the latest web standards.

This grunt task helps simplify things at the design stage.

1. Compiles your SCSS to CSS

2. Removes unused CSS

3. Imports new smaller CSS files

4. Inlines your CSS

## Requirements

* Node.js - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Ruby - [Install ruby with RVM](https://rvm.io/rvm/install)
* Premailer (`gem install premailer hpricot nokogiri`) - Inlines the CSS
* Uncss (`npm install grunt-uncss --save-dev`)
* Processhtml (`npm install grunt-processhtml --save-dev`) 
* LiveReload extension [Download here](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)

## Getting started

1. Open Terminal and go to your working folder
2. Run `npm install` on the folder
3. Run `grunt` to watch for changes to files in the src folder

If you haven't used [Grunt](http://gruntjs.com/) before check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

## How it works
files and file names will differ

<img src="http://i.imgur.com/yrHpTdr.jpg" width="500">

### CSS

This project uses [SCSS](http://sass-lang.com/). You don't need to touch the .css files, these are compiled automatically.

For changes to CSS, modify the .scss files.

Media queries and responsive styles are in a separate style sheet so that they don't get inlined. Note that only a few clients support media queries e.g. iOS Mail app.

### Generate your email templates

In terminal, run `grunt`. This will check for any changes you make to your .scss and .html templates, then automatically run the tasks below. Saves you having to run grunt every time.

* Compile your SCSS to CSS
* Remove unused CSS
* Attach new tidy CSS to html
* Inline your CSS

See the output HTML in the `dist` folder. Open them and preview it the browser.