/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}","./node_modules/flowbite/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    class:"dark",
    plugins: [require('flowbite/plugin')],
  }