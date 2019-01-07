import { browser, element, by, ElementFinder, ProtractorBrowser, protractor, logging} from 'protractor'
import {Workbook} from 'exceljs'
import { loggers } from 'winston';

describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('Excel Operations', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		browser.get("https://google.com")
		
		var wb = new Workbook()
		var sheet = wb.addWorksheet("dummysheet")
		
		var j=1
		for(let i=1;i<5;i++){

			sheet.getRow(i).getCell(j).value = "zzz"
			j++
		}
		wb.xlsx.writeFile("../../POM/data-files/excel-new.xlsx")
	});
});
