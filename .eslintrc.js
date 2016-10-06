module.exports = {
    "parser": "babel-eslint",
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "react",
        "html"
    ],
    "rules": {
      "no-multi-spaces": "off",
      "key-spacing": ["error", {
        "align": {
          "beforeColon": true,
          "afterColon": true,
          "on": "colon"
        }
      }],
      "no-return-assign": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
    "env": {
      "browser": true
    }
};
