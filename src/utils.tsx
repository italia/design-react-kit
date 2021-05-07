export const noop = () => {}

export const logError = (message: string) => {
    if(typeof console !== 'undefined'){
        console.error(message);
    }
}

const messages: Record<string, 1> = {};
export const notifyDeprecation = (message: string, options = {once: true}) => {
    if(!options.once){
        logError(message);
    } else {
        if(!messages[message]){
            logError(message);
            messages[message] = 1;
        }
    }
}