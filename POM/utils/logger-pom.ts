import {createLogger,format, transports} from 'winston'
const{combine,timestamp,label,printf,prettyPrint} = format
export class CustomLogger{
    public static newFormat = printf(info=>{
        return `${info.timestamp}> ${info.level}> ${info.message}`
    })
    public static logger = createLogger({
        level:'info',
        format:combine(
            label({label:"some"}),
            timestamp(),
            CustomLogger.newFormat
            ),   
        transports:[
            new transports.Console(),
            new transports.File({filename:"simple-log3.log"})
        ]
    })
}