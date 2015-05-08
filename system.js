// Define the system topology here. The topolgy should reference 
// containers defined in definitions/services.js

exports.name = 'nscdebug';
exports.namespace = 'nscdebug';
exports.id = '86da3b0e-0edf-4911-ab03-4ec3f239136e';

exports.topology = {
  local: {
    root: ['nscfe']
  },
  staging: {
    root: ['nscfe']
  }
};

