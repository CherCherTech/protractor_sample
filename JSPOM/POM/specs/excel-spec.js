"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('Excel Operations', function () {
        // set implicit time to 30 seconds
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        protractor_1.browser.get("https://google.com");
        var wb = new exceljs_1.Workbook();
        var sheet = wb.addWorksheet("dummysheet");
        var j = 1;
        for (let i = 1; i < 5; i++) {
            sheet.getRow(i).getCell(j).value = "zzz";
            j++;
        }
        wb.xlsx.writeFile("../../POM/data-files/excel-new.xlsx");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9zcGVjcy9leGNlbC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXVHO0FBQ3ZHLHFDQUFnQztBQUdoQyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7SUFDdEMsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBQywyQkFBMkI7SUFDakUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNwQyxFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFDdEIsa0NBQWtDO1FBQ2xDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFFakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxrQkFBUSxFQUFFLENBQUE7UUFDdkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUV6QyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUE7UUFDUCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDO1lBRW5CLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7WUFDeEMsQ0FBQyxFQUFFLENBQUE7U0FDSDtRQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7SUFDekQsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9