import logger from "./singleton";

export default function secondLogger(){
    logger.printLogCount()
    logger.log('Second File')
    logger.printLogCount()
}