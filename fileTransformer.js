// Specify how assets are transformed in jest
// For example, a transformer that returns the basename of a file (such that require('logo.jpg'); returns 'logo')
const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
