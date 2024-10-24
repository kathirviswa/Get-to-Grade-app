
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}