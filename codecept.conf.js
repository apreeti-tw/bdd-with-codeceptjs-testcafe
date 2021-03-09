exports.config = {
  output: './output',
  helpers: {
    TestCafe: {
      url: 'http://localhost',
      browser: 'chrome',
      show: true,
      waitForTimeout: 15000
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js',
    navbar: './pages/navbar.js',
    accountPage: './pages/account.js',
    userdata: './data/UserData.js',
    searchdata: './data/SearchData.js',
    alertmessages: './data/AlertMessages.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {},
    tryTo: {
      enabled: true
    }
  },
  tests: './tests/*_test.js',
  name: 'bdd-with-codeceptjs-testcafe'
}
