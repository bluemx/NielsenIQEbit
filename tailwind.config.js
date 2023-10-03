/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: {
          main: var(--main),
          second: '#eb1b2c',
          third: '#1f2c74',
        }
      },
    },
    plugins: [],
  }