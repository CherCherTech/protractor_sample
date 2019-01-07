"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('cookie', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('cookie', function () {
        protractor_1.browser.get('https://chercher.tech/');
        protractor_1.browser.manage().getCookie("trainingCookie").then(function (coo) {
            console.log(coo.value);
            console.log(coo.domain);
            console.log(coo.expiry);
        });
        protractor_1.browser.manage().addCookie({ name: "some", value: "some value" });
        protractor_1.browser.manage().getCookies().then(function (arrCookies) {
            for (let i = 0; i < arrCookies.length; i++) {
                console.log(arrCookies[i].value);
                console.log(arrCookies[i].domain);
                console.log(arrCookies[i].expiry);
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9zcGVjcy9jb29raWUtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBS2xELFFBQVEsQ0FBQyxRQUFRLEVBQUU7SUFDZixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTtJQUNwQyxFQUFFLENBQUMsUUFBUSxFQUFFO1FBRVQsb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFFRixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUE7UUFDNUQsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxVQUFVO1lBQ2xELEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFBIn0=