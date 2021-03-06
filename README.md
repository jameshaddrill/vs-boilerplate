# vs-boilerplate

## Purpose of the boilerplate

This boilerplate is designed to be a starting point for the majority of VisitScotland front end projects.

It has been created to enable quick start up to the front end aspect of any project as well as enforcing a uniform appraoch to workflow, linting and code formatting.

---

[vs-boilerplate](#vs-boilerplate)

-   [Purpose of the boilerplate](#purpose-of-the-boilerplate)
-   [Technologies used](#technologies-used) - [HTML](#html) - [Vue](#vue) - [CSS](#css) - [Javascript](#javascript)
-   [Configuration files](#configuration-files)
-   [Prettier](#prettier)

## Technologies used

The following Webpack plugins and loaders are used:

### HTML

[HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) - this generates an HTML file for the front end entry point

### Vue

[VueLoaderPlugin](https://vue-loader.vuejs.org/) - facilitates use of Vue components in Webpack workflow

### CSS

[MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) - extracts CSS from JS into CSS files for build  
[StylelintPlugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/) - allows the use of Stylelint - see the linting section for more details  
[CSSNano]()  
[Autoprefixer]()

### Javascript

[Babel]()  
[ES Lint]()

## Configuration files

Where possible, configuration files are kept in a configs folder in the root of the boilerplate.

## Prettier

A prettier config file is located at the root of the project. If Prettier is installed it will automatically format code so it aligns with linting rules.
