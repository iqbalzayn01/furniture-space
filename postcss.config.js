module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
  ],
};

// const tailwindcss = require('tailwindcss');
// module.exports = {
//   plugins: [
//     'postcss-preset-env',
//     tailwindcss
//   ],
// };
