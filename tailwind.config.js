/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
    darkMode:"class",
    theme: {
      extend: {
        colors: {
          primary: {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","950":"#e65100"}//amber
          //primary: {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238","950":"#263238"}//bluegray
          //primary: {"50":"#f0f5ff","100":"#d6e4ff","200":"#adc6ff","300":"#85a5ff","400":"#597ef7","500":"#2f54eb","600":"#1d39c4","700":"#10239e","800":"#061178","900":"#061178","950":"#030852"}//blie
        }
      },
      fontFamily:{
        primary:["Poppins"],
        title:["Oswald"]
      }
    },
    // daisyui: {
    //   themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    // },
    plugins: [  
      require('flowbite/plugin'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  
  