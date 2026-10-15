/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
      colors: { violet: { brand: "#7C5CFF" }, rose: { brand: "#FF6B9A" } },
      animation: { float: "float 6s ease-in-out infinite", blob: "blob 18s ease-in-out infinite" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        blob: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(40px,-30px) scale(1.15)" } },
      },
    },
  },
  plugins: [],
};
