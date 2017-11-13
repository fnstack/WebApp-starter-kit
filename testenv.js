const Enzyme =  require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable no-console */
console.error = message => {
  if (
    message.indexOf('uppercase HTML') === -1 &&
    message.indexOf('spell it as lowercase') === -1 &&
    message.indexOf('cast the value') === -1
  ) {
    console.warn(message);
  }
};
