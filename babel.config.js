/*
 * @Description: babel
 * @Version: 1.0
 * @Autor: Edison Lu
 * @Date: 2020-10-29 16:43:49
 * @LastEditors: Edison Lu
 * @LastEditTime: 2020-10-29 16:48:23
 */
module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-syntax-jsx"],
  ],
};