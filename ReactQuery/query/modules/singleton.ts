class Logger {
    logs: string[];
    static instance: Logger;
    constructor() {
        if(Logger.instance == null) {
            this.logs = []
            Logger.instance = this
        }
        return Logger.instance
    }
    log(message: string){
        this.logs.push(message)
        console.log(`Log: ${message}`);
    }
    printLogCount(){
        console.log(`${this.logs.length} Logs`);
    }
}

const logger = new Logger()
Object.freeze(logger)
export default logger   