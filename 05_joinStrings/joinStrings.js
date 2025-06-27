/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
/*
## Step 2: Do
After understanding the example code, you will recreate the snippet on your own using the following instructions (in `joinStrings.js`):

1. Create 4 variables: `firstName`, `lastName`, `thisYear`, and `birthYear`

2. Create a 5th variable, `greeting`, that is constructed from the previous 4 variables
- It should contain a greeting that includes the person's full name and age

Note: To make the tests pass, 
you will need to use exact values and wording (as you will see described in `joinStrings.js`). 
If the tests fail, look at the feedback in your terminal then 
check your spacing, capitalization, and punctation.
*/

/*
## Step 3: Optimize
You will edit your code to make it easier to read using the following instructions:

1. Create 2 new variables: `fullName` and `age`
- Do NOT simply type the full name and age into the new variables
- Instead, use the pre-existing variables, with the calculations that are currently inside of `greeting`

2. Edit the `greeting` string to use `fullName` and `age` instead of the other 4 variables
*/

let firstName = 'Carlos';
let lastName = 'Stevenson';
let thisYear = 1965;
let birthYear = 1947;

let fullName = firstName + " " + lastName;
let age = (thisYear - birthYear);

let greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
