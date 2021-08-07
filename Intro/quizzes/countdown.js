/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
let t = 60

while (t >= 0) {
    if (t == 50) {
        console.log("Orbiter transfers from ground to internal power")
        t -= 1
    } else if (t == 31) {
        console.log("Ground launch sequencer is go for auto sequence start")
        t -= 1
    } else if (t == 16) {
        console.log("Activate launch pad sound suppression system")
        t -= 1
    } else if (t == 10) {
        console.log("Activate main engine hydrogen burnoff system")
        t -= 1
    } else if (t == 6) {
        console.log("Main engine start")
        t -= 1
    }  else if (t == 0) {
        console.log("Solid rocket booster ignition and liftoff!")
        t -= 1
    } else {
        console.log("T-" + t + " seconds")
        t -= 1
    }
}