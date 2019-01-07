var fileSystem = require('fs')
export  class JsonUtils{
    /**
     * name
     */
    public readJsonFile(filePath="D:\\probatch1\\POM\\data-files\\json-data.json", key?:string) {
        if(key != undefined){
            return JSON.parse(fileSystem.readFileSync(filePath))[key]
        }
        return JSON.parse(fileSystem.readFileSync(filePath))
    }  
}