'use strict';

const micromatch = require('micromatch');

hexo.config.htmlnano = Object.assign(
    {
        exclude: [],
        collapseBooleanAttributes: {},
        collapseWhitespace: 'conservative',
        // Ignore '<!-- more -->' https://hexo.io/docs/tag-plugins#Post-Excerpt
        ignoreCustomComments: [/^\s*more/],
        removeComments: true,
        removeEmptyAttributes: true,
        minifyJs: {},
        minifyCss: {
            preset: 'default',
        },
        minifyJson: {},
    },
    hexo.config.htmlnano
);

const ignoreCustomComments = hexo.config.ignoreCustomComments;

hexo.config.htmlnano.removeComments = (comment) => !micromatch.isMatch(comment, ignoreCustomComments);
delete hexo.config.htmlnano.ignoreCustomComments;

hexo.extend.filter.register('after_render:html', require('./lib/filter'));
