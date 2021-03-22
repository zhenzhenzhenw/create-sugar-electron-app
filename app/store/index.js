const inclass = require('./inclass');
const user = require('./user');

module.exports = {
  state: {
    en5Version: '',
    enmVersion: '',
    deviceFunctions: {},
  },
  modules: {
    inclass,
    user,
  },
};
