import { browser} from 'protractor'
var req = require("request")

describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('API Operations', function(done) {
       req.delete({
           "headers":{"content-type": "application/json"},
           "url":"https://chercher.tech/sample/api/product/delete",

       },(error, response, body)=>{

        console.log(response.statusCode)
        console.log(body)
        done()

       })
       
    });








    it('API Operations', function(done) {
        req.get({
            "headers":{"content-type": "application/json"},
            "url":"https://chercher.tech/sample/api/product/create"
        },(error, response, body)=>{
 
         console.log(response.statusCode)
         console.log(body)
         done()
 
        })
        
     });
     
    
});






