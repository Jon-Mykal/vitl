// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: ['./index.html', './**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  prefix: "tw-",
  theme: {
    extend: {},
  },
  plugins: [],
};