/* 
SCRIPT AUTHOR:
    Eric Furspan, 01/09/2019
CHALLENGE DETAILS:
    The program must use two threads; one thread that prints odd numbers 
    and another thread that prints even numbers

    Print messages to standard output

    These two threads must be synchronized such that the output appears in correct numerical order

    Include a thread identifier in the output, indicating the source thread that generated the message

NOTES:
    'worker_threads' is a new and experimental module in NodeJs. see more here https://nodejs.org/api/worker_threads.html#worker_threads
*/

const { Worker, isMainThread, parentPort, threadId } = require('worker_threads');
const maxCount = 100;
try{
    if (isMainThread) {
        // This code is executed in the main thread
        
        // Create a worker thread 
        const worker = new Worker(__filename);
    
        // Listens for messages from the worker thread
        // on message, and handles stdout logging for both thread messages
        worker.on('message', (data) => {
            console.log(`Thread ${threadId}: The number is ${data.num}`);
            console.log(data.msg);
        });
    } else {
        // This code is executed in the worker thread
    
        for(let i=1;i<=maxCount;i+=2) {
            // pass the message to the main thread
            parentPort.postMessage({num: i, msg: `Thread ${threadId}: The number is ${i + 1}`});
        }      
    }
} catch(e) {
    console.error(e)
}
