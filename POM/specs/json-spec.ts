import { browser, element, by, ElementFinder, ProtractorBrowser, protractor} from 'protractor'
import { JsonUtils } from '../fileutils/json-utils';

describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('Mouse Operations', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);

        browser.get("https://google.com")
        var ju = new JsonUtils()
        var jd = ju.readJsonFile()
        console.log(jd["name"])

        console.log(ju.readJsonFile("../../POM/data-files/json-data.json")) 
	});
});
