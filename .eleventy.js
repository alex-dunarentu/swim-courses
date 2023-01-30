const CleanCSS = require('clean-css');
const { minify } = require('terser');
const fs = require('fs');
const NOT_FOUND_PATH = 'public/404.html';
require('dotenv').config();

module.exports = function eleventyConfig(config) {
  config.addWatchTarget('src/components/');
  config.addWatchTarget('src/assets/');

  config.addPassthroughCopy({ './src/assets': 'assets' });
  config.addPassthroughCopy('sw.js');
  config.addFilter('cssmin', function (code) {
    return process.env.NODE_ENV === 'production' ? CleanCSS({}).minify(code).styles : code;
  });

  config.addNunjucksAsyncFilter('jsmin', async function (code, callback) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error('Terser error: ', err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`);
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH);
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  config.addFilter('log', (value) => {
    console.log('DEBUG', value);
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      output: 'public',
      input: 'src/pages',
      data: '../_data',
      includes: '../_includes',
    },
  };
};
