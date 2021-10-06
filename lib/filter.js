'use strict';

const htmlnano = require('htmlnano');
const micromatch = require('micromatch');

module.exports = async function (str, data) {
    let options = this.config.htmlnano;
    const path = data.path;
    const exclude = options.exclude;
    delete options.exclude;

    if (path && exclude && exclude.length) {
        if (micromatch.isMatch(path, exclude)) return str;
    }

    try {
        return htmlnano.process(str, options).then((data) => data.html);
    } catch (err) {
        throw new Error(`Path: ${path}\n${err}`);
    }
};
