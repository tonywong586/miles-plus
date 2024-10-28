/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--ion-color-primary)",
      },
      spacing: {
        "safe-area-top": "var(--ion-safe-area-top)",
        "safe-area-bottom": "var(--ion-safe-area-bottom)",
        "safe-area-left": "var(--ion-safe-area-left)",
        "safe-area-right": "var(--ion-safe-area-right)",
        "status-bar": "var(--ion-statusbar-padding)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("tailwindcss-padding-safe")],
};
