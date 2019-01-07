import { browser} from 'protractor'

describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('DB Operations', function(done) {
        var cd = new connectDatabase()
        cd.conn.connect()
        cd.conn.query("SELECT * FROM node_testing", function(err, rows){
            console.log(JSON.stringify(rows))
            // browser.get("http://google.com")
            
            // for(let i = 0; rows.length; i++){
            //     console.log(rows[i]["designation"])
            // }

            // Object.keys(rows).forEach(function(value){
            //     var row = rows[value]
            //     console.log(row["name"])

            // })
            
            cd.conn.end()
            done()
        })
       
    });
    
});







function connectDatabase(){
    var MYSQL = require("mysql")
    this.conn = MYSQL.createConnection({
        host:"sql132.main-hosting.eu",
        user:"u200137511_pavan",
        password:"Bangalore@123",
        database:"u200137511_db"
    })
}
