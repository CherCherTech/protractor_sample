import { browser, element, by, ElementFinder, ProtractorBrowser, protractor} from 'protractor'
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('Mouse Operations', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);

		browser.get("https://google.com")
		browser.actions()
						.click(element(by.name("q")))
						.keyDown(protractor.Key.ENTER)
						.sendKeys(protractor.Key.ARROW_DOWN)
						.keyUp(protractor.Key.SHIFT)
                        .perform()  
        browser.sleep(10000)
	});
});


/*

{
    "name":"karthiq",
    "password":"testpwd"
}

*/