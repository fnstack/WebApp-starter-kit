module.exports = {
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '\\.(jpg|jpeg|png|ico|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|less|scss|css)$':
      '<rootDir>/fileTransformer.js'
  },
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleDirectories: ['node_modules'],
  setupFiles: ['./testenv.js'],
  // testURL: 'http://localhost:2050',
  snapshotSerializers: ['enzyme-to-json/serializer']
};
