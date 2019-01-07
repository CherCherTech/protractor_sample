"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('DB Operations', function (done) {
        var cd = new connectDatabase();
        cd.conn.connect();
        cd.conn.query("SELECT * FROM node_testing", function (err, rows) {
            console.log(JSON.stringify(rows));
            // browser.get("http://google.com")
            // for(let i = 0; rows.length; i++){
            //     console.log(rows[i]["designation"])
            // }
            // Object.keys(rows).forEach(function(value){
            //     var row = rows[value]
            //     console.log(row["name"])
            // })
            cd.conn.end();
            done();
        });
    });
});
function connectDatabase() {
    var MYSQL = require("mysql");
    this.conn = MYSQL.createConnection({
        host: "sql132.main-hosting.eu",
        user: "u200137511_pavan",
        password: "Bangalore@123",
        database: "u200137511_db"
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9zcGVjcy9kYi1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW1DO0FBRW5DLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtJQUN0QyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtJQUNqRSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3BDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBUyxJQUFJO1FBQzFCLElBQUksRUFBRSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUE7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1lBQ2pDLG1DQUFtQztZQUVuQyxvQ0FBb0M7WUFDcEMsMENBQTBDO1lBQzFDLElBQUk7WUFFSiw2Q0FBNkM7WUFDN0MsNEJBQTRCO1lBQzVCLCtCQUErQjtZQUUvQixLQUFLO1lBRUwsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUNiLElBQUksRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDO0FBUUgsU0FBUyxlQUFlO0lBQ3BCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixJQUFJLEVBQUMsd0JBQXdCO1FBQzdCLElBQUksRUFBQyxrQkFBa0I7UUFDdkIsUUFBUSxFQUFDLGVBQWU7UUFDeEIsUUFBUSxFQUFDLGVBQWU7S0FDM0IsQ0FBQyxDQUFBO0FBQ04sQ0FBQyJ9