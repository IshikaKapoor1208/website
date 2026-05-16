/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#173f2b",
          deep: "#102a1d",
          leaf: "#6b8f3f",
          turmeric: "#d99b22",
          mango: "#f08f2d",
          earth: "#eee7d8",
          paper: "#fffaf1",
          ink: "#18211b",
          muted: "#657067"
        }
      },
      boxShadow: {
        premium: "0 24px 80px rgba(19, 39, 26, 0.16)",
        soft: "0 18px 60px rgba(19, 39, 26, 0.08)"
      },
      fontFamily: {
        serif: ["Georgia", "\"Times New Roman\"", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
