/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/*
We also know that each weapon corresponds to a particular room, so...

* the poison belongs to the ballroom,
* the trophy belongs to the gallery,
* the pool stick belongs to the billiards room,
* and the knife belongs to the dining room.

/* ****************************************** */
var room = "billiards room";
var suspect = "Mr. Parkes";
var weapon = "";  // Initial value
var solved = false;

if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
    weapon = 'poison';
    solved = true;
}

else if (room === 'gallery' && suspect==="Ms. Van Cleve") {
    weapon = 'trophy';
    solved = true;
}
else if (room === 'billiards room' && suspect==="Mrs. Sparr") {
    weapon = 'pool stick';
    solved = true;
} 
else if (room === 'dining room' && suspect==="Mr. Parkes") {
    weapon = 'knife';
    solved = true;
}   

/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
    console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}

/* ****************************************** */