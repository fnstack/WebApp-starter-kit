module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    "\\.(jpg|jpeg|png|ico|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleDirectories: ["node_modules"],
  setupFiles: ["./testenv.js"]
};
