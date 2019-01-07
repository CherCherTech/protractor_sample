"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SomeOperation {
    selectOptionFromDropdown() {
        protractor_1.element(protractor_1.by.xpath("//select[@id='first']")).click();
        protractor_1.element(protractor_1.by.xpath("//option[@value='Apple']")).click();
    }
}
exports.SomeOperation = SomeOperation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS91dGlscy9kcm9wZG93bi1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlFO0FBR2pFLE1BQWEsYUFBYTtJQUNkLHdCQUF3QjtRQUM1QixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2xELG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekQsQ0FBQztDQUVKO0FBTkQsc0NBTUMifQ==