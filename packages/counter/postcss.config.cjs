/* eslint-disable */
// https://github.com/michael-ciniawsky/postcss-load-config
require("dotenv").config();

const MF_BUILD = process.env.MF_BUILD;
const MF_TAGNAME = process.env.MF_TAGNAME;

module.exports = (ctx) => {
  const config = {
    plugins: [require("autoprefixer")],
  };

  if (MF_BUILD) {
    config.plugins.push(
      require("postcss-prefix-selector")({
        prefix: `.${MF_TAGNAME}`,

        transform(prefix, selector, prefixedSelector, filePath, rule) {
          /* if (prefixedSelector.includes(".counter-wc")) return selector; */

          if (selector.match(/^(:root)/)) {
            return selector;
          }

          if (selector.match(/^(html|body)/)) {
            return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
          }

          return prefixedSelector;
        },
      })
    );
  }

  return config;
};
