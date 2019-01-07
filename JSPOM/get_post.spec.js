let request = require("request");
describe("Errors in Protractor", function () {
    it("Error handleing in protractor", function (done) {
        let userID = 1;
        request.get({
            "headers": { "content-type": "application/json" },
            "url": "https://jsonplaceholder.typicode.com/posts/" + userID
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            expect(response.statusCode).toBe(200);
            expect(JSON.parse(body)["userId"]).toBe(userID);
            done();
        });
    });
    it("POST ", function (done) {
        request.post({
            "headers": { "content-type": "application/json; charset=UTF-8" },
            "url": "https://jsonplaceholder.typicode.com/posts",
            "body": JSON.stringify({
                "title": "foo",
                "body": "bar",
                "userId": "101"
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            expect(response.statusCode).toBe(201);
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0X3Bvc3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2dldF9wb3N0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBQztJQUM5QixFQUFFLENBQUMsK0JBQStCLEVBQUMsVUFBUyxJQUFJO1FBQzVDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ1YsU0FBUyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQ2pELEtBQUssRUFBRSw2Q0FBNkMsR0FBQyxNQUFNO1NBRTFELEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzNCLElBQUcsS0FBSyxFQUFFO2dCQUNOLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQy9DLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxPQUFPLEVBQUMsVUFBUyxJQUFJO1FBRXRCLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDWCxTQUFTLEVBQUUsRUFBRSxjQUFjLEVBQUUsaUNBQWlDLEVBQUU7WUFDaEUsS0FBSyxFQUFFLDRDQUE0QztZQUNuRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLEtBQUs7Z0JBQ1IsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQztTQUVELEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzNCLElBQUcsS0FBSyxFQUFFO2dCQUNOLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=