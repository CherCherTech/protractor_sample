"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const logger_pom_1 = require("../utils/logger-pom");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    protractor_1.browser.manage().timeouts().implicitlyWait(30000);
    it('Looging', function () {
        protractor_1.browser.get("https://google.com");
        protractor_1.browser.getTitle().then(function (title) {
            console.log("This is console logging");
            logger_pom_1.CustomLogger.logger.log('info', "the title is : " + title);
            logger_pom_1.CustomLogger.logger.log('debug', "debug level logger");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy1zZXBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL3NwZWNzL2xvZ2dpbmctc2VwYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtQztBQUNuQyxvREFBbUQ7QUFHbkQsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO0lBQzlELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDcEMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckQsRUFBRSxDQUFDLFNBQVMsRUFBRTtRQUVQLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUN0Qyx5QkFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGlCQUFpQixHQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hELHlCQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUV6RCxDQUFDLENBQUMsQ0FBQTtJQUdULENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==