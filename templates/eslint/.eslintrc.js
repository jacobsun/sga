module.exports = {
  "env": {
    "node": true,
    "mocha": true,
    "browser": true,
    "jest": true
  },
  extends: 'standard',
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
