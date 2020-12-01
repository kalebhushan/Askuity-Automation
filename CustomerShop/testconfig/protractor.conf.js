exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        args: ['--incognito']
    }
  },
  framework: 'jasmine',
  allScriptsTimeout: 60000,
  specs: ['../tests/specs/dressshopspec.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    isVerbose: true
  },
};