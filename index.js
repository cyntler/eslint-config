module.exports = {
  extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "@next/next/google-font-display": 0,
    "import/no-extraneous-dependencies": 0,
    "no-continue": 0,
  },
};
