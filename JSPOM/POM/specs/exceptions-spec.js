"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('exception', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('exception', function () {
        protractor_1.browser.get('https://google.com');
        let flag = true;
        protractor_1.browser.navigate().refresh();
        for (let i = 0; i < 15; i++) {
            if (flag) {
                console.log(i);
                protractor_1.element(protractor_1.by.name("q")).click().then(function (atr) {
                    console.log("something");
                    protractor_1.browser.sleep(0).then(function () {
                        flag = false;
                    });
                }).catch(function (e) {
                    console.log("@@@@@@@@");
                });
            }
            else {
                break;
            }
        }
        // .then(function(atr){
        //     console.log(atr)
        //     try{
        //         let v:number = parseFloat(atr)
        //     }catch(e){
        //         console.log(e.name)
        //     }finally{
        //         console.log("finally")
        //     }
        // }).catch(function(e){
        //     console.log("@@@@@@@@")
        // })
        // .then(function(){
        //     if(flag){
        //         console.log("@@@@@@@@@@@@@@@@@@@@")
        //     }
        // })
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL3NwZWNzL2V4Y2VwdGlvbnMtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRTtBQUV0RSxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDWixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUVmLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFNUIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxHQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNyQixJQUFHLElBQUksRUFBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNkLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7b0JBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7b0JBQ3hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsSUFBSSxHQUFHLEtBQUssQ0FBQTtvQkFDaEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsQ0FBQztvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUUzQixDQUFDLENBQUMsQ0FBQTthQUNMO2lCQUFJO2dCQUNELE1BQUs7YUFDUjtTQUNKO1FBRUQsdUJBQXVCO1FBRXZCLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gseUNBQXlDO1FBQ3pDLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsZ0JBQWdCO1FBQ2hCLGlDQUFpQztRQUNqQyxRQUFRO1FBR1Isd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5QixLQUFLO1FBR0wsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQiw4Q0FBOEM7UUFDOUMsUUFBUTtRQUVSLEtBQUs7SUFHVCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFBIn0=