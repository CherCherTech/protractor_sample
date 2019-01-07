import { browser} from 'protractor'
import { CustomLogger } from '../utils/logger-pom';


describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000);

	it('Looging', function() {
		
        browser.get("https://google.com")
        browser.getTitle().then(function(title){
            console.log("This is console logging")
            CustomLogger.logger.log('info', "the title is : "+title)
            CustomLogger.logger.log('debug',"debug level logger")

        })
        

	});
});
