// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const consume = (v1, v2, cb) => {
  return cb(v1, v2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (v1, v2) => {
  return v1 + v2
}

const multiply = (v1, v2) => {
  return v1 * v2
}

const greeting = (v1, v2) => {
  return (`Hello ${v1} ${v2}, nice to meet you!`);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
console.log(consume(2,2,add)) // 4
consume(10,16,multiply); // 160
console.log(consume(10,16,multiply)) // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!
console.log(consume("Mary","Poppins", greeting)) // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedfunction() can access the variable 'internal' because of closure.  Closure starts by looking inside itself but
// there is no variable named 'internal' there.  Then it looks outside of its scope a level and it is in the function myFunction().
// If 'internal' had not been there it would have continued looking outwards until it hit the window/global scope.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();