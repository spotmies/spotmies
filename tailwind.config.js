/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0098a3",
        secundary: "#0098a3",
        primary2: "#171717",
        // bg2: "#f1f1f1",
        bg2: "#f1f5f9",
        bg1: "#171717",
        bg3: "#ffffff",
        text_color1: "#f1f1f1",
        text_color2: "#171717",
      },
      screens: {
        md: "1000px",
        lg: "1900px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
