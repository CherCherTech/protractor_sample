"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, printf, prettyPrint } = winston_1.format;
class CustomLogger {
}
CustomLogger.newFormat = printf(info => {
    return `${info.timestamp}> ${info.level}> ${info.message}`;
});
CustomLogger.logger = winston_1.createLogger({
    level: 'info',
    format: combine(label({ label: "some" }), timestamp(), CustomLogger.newFormat),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: "simple-log3.log" })
    ]
});
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLXBvbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS91dGlscy9sb2dnZXItcG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVEO0FBQ3ZELE1BQUssRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLEdBQUcsZ0JBQU0sQ0FBQTtBQUMxRCxNQUFhLFlBQVk7O0FBQ1Asc0JBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFBLEVBQUU7SUFDbkMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDOUQsQ0FBQyxDQUFDLENBQUE7QUFDWSxtQkFBTSxHQUFHLHNCQUFZLENBQUM7SUFDaEMsS0FBSyxFQUFDLE1BQU07SUFDWixNQUFNLEVBQUMsT0FBTyxDQUNWLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUNyQixTQUFTLEVBQUUsRUFDWCxZQUFZLENBQUMsU0FBUyxDQUNyQjtJQUNMLFVBQVUsRUFBQztRQUNQLElBQUksb0JBQVUsQ0FBQyxPQUFPLEVBQUU7UUFDeEIsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBQyxpQkFBaUIsRUFBQyxDQUFDO0tBQ3BEO0NBQ0osQ0FBQyxDQUFBO0FBZk4sb0NBZ0JDIn0=