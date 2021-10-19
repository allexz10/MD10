/**
 * Write a function that takes the number of seconds and returns the digital format clock time as a string. 
 * Time should be counted from 00:00:00.
 */

function digitalClock(seconds: number): any {
    const date = new Date(1970, 0, 1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}

export { digitalClock };