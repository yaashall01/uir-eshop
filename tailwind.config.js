/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  styles :["src/styles.css"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins : {
      preflight : false ,
    }
  
}

