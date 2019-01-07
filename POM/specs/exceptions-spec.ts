import { browser, element, by, ExpectedConditions } from "protractor";

describe('exception', function() {
    browser.ignoreSynchronization = true
    it('exception', function() {
        browser.get('https://google.com');
        let flag = true
        
        browser.navigate().refresh()

        for(let i = 0 ; i<15;i++){
            if(flag){
                console.log(i)
                element(by.name("q")).click().then(function(atr){

                    console.log("something")
                    browser.sleep(0).then(function(){
                        flag = false
                    })
                }).catch(function(e){
                    console.log("@@@@@@@@")
                        
                })
            }else{
                break
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
})