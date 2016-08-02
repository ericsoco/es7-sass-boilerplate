# es7-sass-boilerplate
Boilerplate for using ES6/ES7 syntax (via Babel), modules (via Browserify), and Sass (via node-sass). Also provides watchers for `./js`, `./scss`, and `./static` folders, and a `gh-deploy` script for serving up your projects to the world via GitHub Pages.

It looks like this:
http://ericsoco.github.io/es7-sass-boilerplate/

## Getting started
```
npm i
npm start
```

Open your browser to http://localhost:3000/ to see [index.html](https://github.com/ericsoco/es7-sass-boilerplate/blob/master/static/index.html).

## Adding projects/modules/prototypes/whatever

You can just start tinkering directly in one of the [the examples](https://github.com/ericsoco/es7-sass-boilerplate/tree/master/static) if you like. Or, you can start fresh:

1. Make a new `.html` file based on one of [the examples](https://github.com/ericsoco/es7-sass-boilerplate/tree/master/static). Edit the [`data-module` attribute](https://github.com/ericsoco/es7-sass-boilerplate/blob/master/static/example-vanilla.html#L9) to something your [`main.js`](https://github.com/ericsoco/es7-sass-boilerplate/blob/master/js/main.js) can route.
2. Add or modify one of the links in [index.html](https://github.com/ericsoco/es7-sass-boilerplate/blob/master/static/index.html) to point at it.
3. Make a new `.js` file based on one of [the examples](https://github.com/ericsoco/es7-sass-boilerplate/tree/master/js).
4. Edit [`main.js`](https://github.com/ericsoco/es7-sass-boilerplate/blob/master/js/main.js) to route to it.
5. Make a new Sass partial based on one of [the examples](https://github.com/ericsoco/es7-sass-boilerplate/tree/master/scss).
6. Import it in [`main.scss`](https://github.com/ericsoco/es7-sass-boilerplate/blob/master/scss/main.scss).
7. Change the wrapper class in your `.js` file to match ([e.g. here](https://github.com/ericsoco/es7-sass-boilerplate/blob/master/js/example-vanilla.js#L10)).

s'about it.
