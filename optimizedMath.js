/* 
SCRIPT AUTHOR:
    Eric Furspan, 01/08/2019
CHALLENGE DETAILS:
    Print out all positive integers from 1 to 100, inclusive and in order

    Print messages to standard output

    In the output, state whether the each integer is 'odd' or 'even' in the output

    If the number is divisible by three, instead of stating that the number is odd or even, state
    that the number is 'divisible by three'.

    If the number is divisible by both two and three, instead of saying that the number is odd,
    even or divisible by three; state that the number is 'divisible by two and three'.
NOTES:
    console.log() will print to standard output by default
*/

const maxCount = 100;

try {
    for(let i=1;i<=maxCount;i++) {
        if( (i % 2 === 0) && (i % 3 === 0) ) {  // divisible by both 2 and 3
            console.log(`The number \'${i}\' is divisible by two and three`);
        } else if (i % 3 === 0) {               // divisible by 3 
            console.log(`The number \'${i}\' is divisible by three`);
        } else if (i % 2 === 0) {               // divisible by 2, aka even
            console.log(`The number \'${i}\' is even`);
        } else {                                // not divisible by 2, aka odd
            console.log(`The number \'${i}\' is odd`);
        }
    }
} catch(e) {
    console.error(e)
}