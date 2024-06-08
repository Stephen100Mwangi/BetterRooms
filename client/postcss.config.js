/* eslint-disable no-unused-vars */
import autoprefixer from 'autoprefixer';
import { postcss } from 'postcss-nested';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    postcss,
  },
}

// module.exports = {
//   plugins: [
//     require('postcss-nested'),
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// };

