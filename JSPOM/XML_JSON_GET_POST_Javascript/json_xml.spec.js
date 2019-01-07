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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbl94bWwuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1hNTF9KU09OX0dFVF9QT1NUX0phdmFzY3JpcHQvanNvbl94bWwuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTtRQUMzQixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUM3RSxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFBO1FBQ3JDLGdCQUFnQjtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsb0RBQW9ELEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFakYsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDeEIsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM5QyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3RELElBQUksUUFBUSxHQUFHLHlDQUF5QyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBQyxJQUFJO1lBRTdDLHFDQUFxQztZQUNyQyxJQUFJLGNBQWMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxjQUFjLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFDOUUsSUFBSSxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0RSxFQUFFLENBQUMsYUFBYSxDQUFDLGdEQUFnRCxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9