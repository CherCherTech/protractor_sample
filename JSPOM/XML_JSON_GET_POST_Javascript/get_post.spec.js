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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0X3Bvc3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1hNTF9KU09OX0dFVF9QT1NUX0phdmFzY3JpcHQvZ2V0X3Bvc3Quc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsUUFBUSxDQUFDLHNCQUFzQixFQUFDO0lBQzlCLEVBQUUsQ0FBQywrQkFBK0IsRUFBQyxVQUFTLElBQUk7UUFDNUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDVixTQUFTLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDakQsS0FBSyxFQUFFLDZDQUE2QyxHQUFDLE1BQU07U0FFMUQsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDM0IsSUFBRyxLQUFLLEVBQUU7Z0JBQ04sT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDL0MsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLE9BQU8sRUFBQyxVQUFTLElBQUk7UUFFdEIsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNYLFNBQVMsRUFBRSxFQUFFLGNBQWMsRUFBRSxpQ0FBaUMsRUFBRTtZQUNoRSxLQUFLLEVBQUUsNENBQTRDO1lBQ25ELE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMzQixPQUFPLEVBQUUsS0FBSztnQkFDUixNQUFNLEVBQUUsS0FBSztnQkFDYixRQUFRLEVBQUUsS0FBSzthQUNoQixDQUFDO1NBRUQsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDM0IsSUFBRyxLQUFLLEVBQUU7Z0JBQ04sT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckMsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==