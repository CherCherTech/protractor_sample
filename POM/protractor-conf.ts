import { browser } from "protractor";

exports.config = {
    // allScriptsTimeout:2,
    framework: 'jasmine',
    
    capabilities: {
        browserName: 'chrome',
      },
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["D:\\probatch1\\JSPOM\\POM\\specs\\api-spec.js"],

    jasmineNodeOpts:{
      defaultTimeoutInterval:600000
    }
  }