"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileSystem = require('fs');
class JsonUtils {
    /**
     * name
     */
    readJsonFile(filePath = "D:\\probatch1\\POM\\data-files\\json-data.json", key) {
        if (key != undefined) {
            return JSON.parse(fileSystem.readFileSync(filePath))[key];
        }
        return JSON.parse(fileSystem.readFileSync(filePath));
    }
}
exports.JsonUtils = JsonUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9maWxldXRpbHMvanNvbi11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM5QixNQUFjLFNBQVM7SUFDbkI7O09BRUc7SUFDSSxZQUFZLENBQUMsUUFBUSxHQUFDLGdEQUFnRCxFQUFFLEdBQVc7UUFDdEYsSUFBRyxHQUFHLElBQUksU0FBUyxFQUFDO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDNUQ7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7Q0FDSjtBQVZELDhCQVVDIn0=