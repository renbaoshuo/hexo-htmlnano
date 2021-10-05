# hexo-htmlnano

[![NPM version](https://badge.fury.io/js/hexo-htmlnano.svg)](https://www.npmjs.com/package/hexo-htmlnano)

Minify HTML files in Hexo with [htmlnano](https://github.com/posthtml/htmlnano).

## Installation

``` bash
$ npm install hexo-htmlnano --save
```

## Options

You can set options of htmlnano in the main `_config.yml` file:

``` yaml
htmlnano:
  exclude: 
```

- **exclude**: Exclude files from being minified. Support [globbing patterns](https://github.com/micromatch/micromatch#extended-globbing).

Default options:

``` yaml
htmlnano:  
  exclude:
  collapseBooleanAttributes:
  collapseWhitespace: conservative
  # Ignore '<!-- more -->' https://hexo.io/docs/tag-plugins#Post-Excerpt
  ignoreCustomComments: [ !!js/regexp /^\s*more/ ]
  removeComments: true
  removeEmptyAttributes: true
  minifyJs:
  minifyCss:
    preset: default
  minifyJson:
```

- **ignoreCustomComments**: Array of regex'es that allow to ignore certain comments, when matched. Need to prepend [`!!js/regexp`](https://github.com/nodeca/js-yaml#supported-yaml-types) to support regex.

Description of the above options and other available options, see [htmlnano docs](https://htmlnano.netlify.app/modules).

## Author

**hexo-htmlnano** © [Baoshuo](https://github.com/renbaoshuo), Released under the [AGPL-3.0](./LICENSE) License.  
Authored and maintained by Baoshuo with help from [contributors](https://github.com/renbaoshuo/hexo-htmlnano/contributors).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
