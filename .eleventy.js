module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/js/");

    eleventyConfig.addWatchTarget("./src/css");
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site'
        },
        templateFormat: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dateTemplateEngine: 'njk',
    }
}