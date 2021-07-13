/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
/*
no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.
*/

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

switch (salary) {
  case 1:
    salary += "25,636";
    break;
  case 2:
    salary += "35,256";
    break;
  case 3:
    salary += "41,496";
    break;
  case 4:
    salary += "59,124";
    break;
  case 5:
    salary += "69,732";
    break;
  case 6:
    salary += "89,960";
    break;
  case 7:
    salary += "84,396";
    break;
}

console.log("In 2015, a person with an " + education + " degree earned an average of $" + salary + "/year.");