"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HandleAlerts {
    acceptAlert(elem) {
        protractor_1.browser.sleep(4000);
        elem.click();
        protractor_1.browser.switchTo().alert().accept();
    }
    getTextFromAlert() {
        return protractor_1.browser.switchTo().alert().getText();
    }
}
exports.HandleAlerts = HandleAlerts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWFsZXJ0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS91dGlscy9oYW5kbGUtYWxlcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW9EO0FBRXBELE1BQWEsWUFBWTtJQUNiLFdBQVcsQ0FBQyxJQUFrQjtRQUNsQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDWixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3ZDLENBQUM7SUFFTyxnQkFBZ0I7UUFDcEIsT0FBTyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQy9DLENBQUM7Q0FDSjtBQVZELG9DQVVDIn0=