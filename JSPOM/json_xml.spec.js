const fs = require('fs');
describe('Protractor Typescript Demo', function () {
    it('Javascript executions', function () {
        const totalContent = require("C:\\Users\\user\\Desktop\\nagesh\\sample-json.json");
        totalContent["firstname"] = "Anirudh";
        // write to file
        let data = JSON.stringify(totalContent);
        fs.writeFileSync("C:\\Users\\user\\Desktop\\nagesh\\edited-json.json", data);
    });
    it('Javascript executions', function () {
        const DOMParser = require('xmldom').DOMParser;
        const XMLSerializer = require('xmldom').XMLSerializer;
        var filename = "C:\\Users\\user\\Desktop\\nagesh\\a.xml";
        fs.readFile(filename, "utf-8", function (err, data) {
            //CREATE/PARSE XML OBJECT FROM STRING
            var customerConfig = new DOMParser().parseFromString(data);
            customerConfig.getElementsByTagName("name")[0].childNodes[0].data = "Anirudh";
            var xmlString = new XMLSerializer().serializeToString(customerConfig);
            fs.writeFileSync("C:\\Users\\user\\Desktop\\nagesh\\data_new.xml", xmlString);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbl94bWwuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2pzb25feG1sLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtJQUN0QyxFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDM0IsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDN0UsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtRQUNyQyxnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsYUFBYSxDQUFDLG9EQUFvRCxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWpGLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQ3hCLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN0RCxJQUFJLFFBQVEsR0FBRyx5Q0FBeUMsQ0FBQztRQUN6RCxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUMsSUFBSTtZQUU3QyxxQ0FBcUM7WUFDckMsSUFBSSxjQUFjLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsY0FBYyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQzlFLElBQUksU0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnREFBZ0QsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUNqRixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==