/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms', 'flowbite-react/tailwind'),
  ],
}

