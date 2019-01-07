import { browser, element, by, ElementFinder, ProtractorBrowser, protractor} from 'protractor'
import { JsonUtils } from '../fileutils/json-utils';
var fs = require('fs')
var csvModule = require('papaparse')

describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('CSV Operations', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
        browser.get("https://google.com")
        var strSomething = fs.readFileSync("D:\\probatch1\\POM\\data-files\\csv-data.csv", 'utf8')
	});
});
