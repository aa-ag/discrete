// slicing 
var quote = "Stay awhile and listen!";
console.log(quote[6]);

// favorite food
/*
 * Programming Quiz: Favorite Food (2-3)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should print a string with your favorite food
 * 2. Your code should have the first character capitalized
 * 3. Your code must have a `console.log()` function
 * 4. Your code should not be empty
 */
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

  console.log(titleCase('water'));
  // what class was expecting
  console.log("Pizza");