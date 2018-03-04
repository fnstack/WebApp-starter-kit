const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('raf/polyfill');

Enzyme.configure({ adapter: new Adapter() });
jest.mock('redux-oidc', () => ({ createUserManager: () => jest.fn() }));

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
