/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalSans: [
          'GeneralSans-Variable',
          'GeneralSans-VariableItalic',
          'GeneralSans-Extralight',
          'GeneralSans-ExtralightItalic',
          'GeneralSans-Light',
          'GeneralSans-LightItalic',
          'GeneralSans-Regular',
          'GeneralSans-Italic',
          'GeneralSans-Medium',
          'GeneralSans-MediumItalic',
          'GeneralSans-Semibold',
          'GeneralSans-SemiboldItalic',
          'GeneralSans-Bold',
          'GeneralSans-BoldItalic',
        ],
      },
    },
  },
  plugins: [],
};
