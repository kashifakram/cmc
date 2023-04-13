import logger from "./singleton";

export default function secondLogger(){
    logger.printLogCount()
    logger.log('First File')
    logger.printLogCount()
}