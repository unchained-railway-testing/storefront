import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

const tailwindConfig = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      fontWeight: {
        normal: "300",
        medium: "400",
        semibold: "400",
        bold: "400",
      },
      colors: {
        // Anandi yoga color scheme
        beige: "#f8f0d5",
        "beige-alt": "#eee5c4",
        olivebrown: "#d4b78f",
        "olivebrown-alt": "#f6eedb",
        quaternary: "#e5d8ae",
        withblur: "rgba(248, 240, 213, 0.6)",
        "olivebrown-light": "#efdeb7",
        "olivebrown-light-2": "#e1d1ab",
        "olivebrown-dark": "#7f6f49",
        "olivebrown-darker": "#50462f",

        // Map existing color names to Anandi colors
        "dark-gray": "#7f6f49",
        "color-light-dark": "#50462f",
        "light-black": "#e1d1ab",
        "light-blue": "#efdeb7",
        "color-brand": "#d4b78f",
        "color-brand-lightest": "#f8f0d5",
        "color-brand-darker": "#50462f",
        "color-dark": "#50462f",
        "color-grey-lightest": "#f6eedb",
        "color-danger-100": "#FEE2E2",
        "color-danger-200": "#FECACA",
        "color-danger-600": "#DC2626",
        "color-danger-900": "#7F1D1D",
        "color-warning-100": "#FEF3C7",
        "color-warning-200": "#FDE68A",
        "color-warning-900": "#78350F",
        "color-success-100": "#D1FAE5",
        "color-success-200": "#A7F3D0",
        "color-success-900": "#064E3B",
      },
      boxShadow: {
        0: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
      },
      flex: {
        2: "0 0 50%",
        3: "0 0 100%",
        4: "0 0 33.333333%",
        5: "0 0 25%",
        6: "0 0 66.666667%%",
        7: "0 0 75%",
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
        "2/3": "66.666667%%",
        "3/4": "75%",
      },
      content: {
        star: 'url("/storefront/public/static/img/icon-streamline/arrow-button-down.svg")',
      },
      spacing: {
        sp: "calc(1em - 5px)",
        "sp-1": "calc(100% + 3em)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [aspectRatio, typography, forms],
} satisfies Config;

export default tailwindConfig;

// const tailwindConfig = {
//   theme: {},
//   // corePlugins: {
//   //   aspectRatio: false,
//   // },
//   // plugins: [
//   // ],
// };

// export default tailwindConfig;
