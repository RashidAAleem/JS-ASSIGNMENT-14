//q1

// function currDate(){
// var today = new Date
//     document.write(today)
// }

// currDate()

//q2
// function greet(){
// var firstName = prompt("Enter Your First Name")
// var lastName = prompt("Enter Your Last Name")
// alert("Hello!.... " + firstName+ " " + lastName)

// }

// greet();


//q3

// function addNum(){

//  var firstNum = +prompt("Please enter first number")
//  var secondNum = +prompt("Please enter second number")
//  return xyz = firstNum + secondNum   
// }

// addNum()
// var a = xyz
// document.write(a)

//q4

// function calc() {
//     var firstNum = +prompt("Please enter first number");
//     var secondNum = +prompt("Please enter second number");
//     var operation = prompt("Please enter operation you want to perform (+, -, *, or /)");

//     var result;
    
//     switch (operation) {
//         case '+':
//             result = firstNum + secondNum;
//             break;
//         case '-':
//             result = firstNum - secondNum;
//             break;
//         case '*':
//             result = firstNum * secondNum;
//             break;
//         case '/':
//             result = firstNum / secondNum;
//             break;
//         default:
//             result = "Calculator";
//     }

//     alert("The result is: " + result);
// }

// calc();



//q5

// function square(number) {
    
//     var result = number * number
//     document.write(result)
// }

// var number = +prompt("Enter a Number")
// square(number)

//q6
//  // Function to compute the factorial of a number
//  function factorial(number) {
//     var result = 1;
//     var steps = ""; // To store the multiplication steps

//     // Calculate the factorial using a loop
//     for (var i = 1; i <= number; i++) {
//         result *= i;
        
//         // Append the current step to the steps string
//         steps += (i === 1) ? i : " × " + i;
//     }

//     // Display the factorial steps and result
//     document.write("Factorial of " + number + ": " + steps + " = " + result);
// }

// // Prompt the user to enter a number
// var number = +prompt("Enter a number:");

// // Check if the input is a valid number
// if (isNaN(number) || number < 0) {
//     document.write("Please enter a valid non-negative number.");
// } else {
//     factorial(number);
// }


// q6
// // Function to compute the factorial of a number
// function factorial(number) {
//     var result = 1;
//     var steps = ""; // To store the multiplication steps

//     // Calculate the factorial using a loop in descending order
//     for (var i = number; i >= 1; i--) {
//         result *= i;

//         // Append the current step to the steps string
//         steps += (i === number) ? i : " x " + i;
//     }

//     // Display the factorial steps and result
//     document.write("Factorial of " + number + ": " + number+"! "+ "= "+ steps + " = " + result);
// }

// // Prompt the user to enter a number
// var number = +prompt("Enter a number:");


//     factorial(number);


// q7

// function displayCounting(start, end) {
//     // Check if start is greater than end
//     if (start > end) {
//         document.write("<p>Start number should be less than or equal to the end number.</p>");
//     } else {
//         // Loop through the range from start to end and display each number
//         document.write("<p>Counting from " + start + " to " + end + ": ");
//         for (var i = start; i <= end; i++) {
//             document.write(i + " ");
//         }
//         document.write("</p>");
//     }
// }

// // Prompt the user to enter start and end numbers
// var start = +prompt("Enter the first number:");
// var end = +prompt("Enter the last number:");

// // Check if inputs are valid numbers
// if (isNaN(start) || isNaN(end)) {
//     document.write("<p>Please enter valid numbers.</p>");
// } else {
//     // Call the function to display counting
//     displayCounting(start, end);
// }


// q8

//   // Outer function to calculate the hypotenuse
//   function calculateHypotenuse() {
//     // Get base and perpendicular as input
//     var base = +prompt("Enter the base of the triangle:");
//     var perpendicular = +prompt("Enter the perpendicular of the triangle:");

//     // Check if inputs are valid numbers
//     if (isNaN(base) || isNaN(perpendicular) || base <= 0 || perpendicular <= 0) {
//         document.write("Please enter valid positive numbers for base and perpendicular.");
//         return;
//     }

//     // Inner function to calculate the square of a number
//     function calculateSquare(value) {
//         return value * value;
//     }

//     // Calculate the squares of the base and perpendicular
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     // Display the steps of the calculation
//     document.write("<p>Step 1: Square of base = " + base + "<sup>2</sup> = " + baseSquare + "</p>");
//     document.write("<p>Step 2: Square of perpendicular = " + perpendicular + "<sup>2</sup> = " + perpendicularSquare + "</p>");
//     document.write("<p>Step 3: Sum of squares = " + baseSquare + " + " + perpendicularSquare + " = " + (baseSquare + perpendicularSquare) + "</p>");

//     // Calculate the hypotenuse using the Pythagorean theorem
//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     // Display the final result
//     document.write("<p>Step 4: Hypotenuse = √(" + baseSquare + " + " + perpendicularSquare + ") = " + hypotenuse.toFixed(2) + "</p>");
// }

// // Call the outer function to calculate the hypotenuse
// calculateHypotenuse();

// q9

//   // Function to calculate the area of a rectangle
//   function calculateArea(width, height) {
//     return width * height; // Area = width * height
// }

// // i. Arguments as values (user inputs)
// var width = +prompt("Enter the width of the rectangle:");  // Prompt for width
// var height = +prompt("Enter the height of the rectangle:");  // Prompt for height

// // Check if inputs are valid numbers
// if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
//     document.write("<p>Please enter valid positive numbers for both width and height.</p>");
// } else {
//     var area = calculateArea(width, height);  // Call the function with prompt values
//     document.write("<p>Area of rectangle with width " + width + " and height " + height + " is: " + area + "</p>");
// }

// // ii. Arguments as variables (user inputs)
// var widthVariable = +prompt("Enter the width of the rectangle (variable version):");
// var heightVariable = +prompt("Enter the height of the rectangle (variable version):");

// // Check if inputs are valid numbers
// if (isNaN(widthVariable) || isNaN(heightVariable) || widthVariable <= 0 || heightVariable <= 0) {
//     document.write("<p>Please enter valid positive numbers for both width and height (variable version).</p>");
// } else {
//     var areaWithVariables = calculateArea(widthVariable, heightVariable);  // Call the function with variable version
//     document.write("<p>Area of rectangle with width " + widthVariable + " and height " + heightVariable + " is: " + areaWithVariables + "</p>");
// }

// q10

//  // Function to check if a string is palindrome
//  function isPalindrome(str) {
//     // Remove any spaces and convert to lowercase for case-insensitive comparison
//     var cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
//     // Reverse the string
//     var reversedStr = cleanedStr.split('').reverse().join('');
    
//     // Check if the cleaned string is equal to its reverse
//     if (cleanedStr === reversedStr) {
//         return true; // It's a palindrome
//     } else {
//         return false; // It's not a palindrome
//     }
// }

// // Take input from the user
// var inputString = prompt("Enter a string to check if it's a palindrome:");

// // Check if the string is a palindrome and display the result
// if (isPalindrome(inputString)) {
//     document.write("<p>'" + inputString + "' is a palindrome.</p>");
// } else {
//     document.write("<p>'" + inputString + "' is not a palindrome.</p>");
// }

//q11

// // Function to capitalize the first letter of each word in a string
// function capitalizeFirstLetter(str) {
//     // Split the string into words
//     var words = str.split(' ');

//     // Capitalize the first letter of each word
//     for (var i = 0; i < words.length; i++) {
//         // Capitalize the first letter and keep the rest of the word in lowercase
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }

//     // Join the words back into a single string
//     return words.join(' ');
// }

// // Example input string
// var inputString = prompt("Enter Statement");

// // Convert the first letter of each word to uppercase
// var result = capitalizeFirstLetter(inputString);

// // Display the result
// document.write("<p>Original String: '" + inputString + "'</p>");
// document.write("<p>Converted String: '" + result + "'</p>");


//q12

//  // Function to find the longest word in a string
//  function findLongestWord(str) {
//     // Split the string into words
//     var words = str.split(' ');

//     // Initialize a variable to store the longest word
//     var longestWord = '';

//     // Loop through each word in the array
//     for (var i = 0; i < words.length; i++) {
//         // Update longestWord if the current word is longer
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     // Return the longest word
//     return longestWord;
// }

// // Example input string
// var inputString = prompt("Enter Your Sentence");

// // Find the longest word
// var longest = findLongestWord(inputString);

// // Display the result
// document.write("<p>Original String: '" + inputString + "'</p>");
// document.write("<p>Longest Word: '" + longest + "'</p>");

//q13

//  // Function to count the occurrences of a specified letter in a string
//  function countOccurrences(str, letter) {
//     var count = 0;

//     // Loop through the string and check each character
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             count++; // Increment the count if the letter matches
//         }
//     }

//     return count;
// }

// // Prompt user to enter a string and a letter
// var sentence = prompt("Enter a sentence or string:");
// var letter = prompt("Enter a letter to count its occurrences:");

// // Validate input
// if (letter.length === 1) {
//     var occurrences = countOccurrences(sentence, letter);
//     document.write("<p>The letter '" + letter + "' appears " + occurrences + " times in the string '" + sentence + "'.</p>");
// } else {
//     document.write("<p>Please enter a valid single letter.</p>");
// }

// q14 
//   // Function to calculate and show the steps for the circumference of a circle
//   function calcCircumference(radius) {
//     // Formula for circumference: 2πr
//     var circumference = 2 * Math.PI * radius;
    
//     // Display the formula and steps
//     document.write("<p><strong>Circumference Calculation:</strong></p>");
//     document.write("<p>Formula: 2πr</p>");
//     document.write("<p>Substitute radius (" + radius + "): 2 × π × " + radius + "</p>");
//     document.write("<p>Approximate value: 2 × " + Math.PI.toFixed(2) + " × " + radius + " = " + circumference.toFixed(2) + "</p>");
//     document.write("<p>The circumference is " + circumference.toFixed(2) + ".</p>");
// }

// // Function to calculate and show the steps for the area of a circle
// function calcArea(radius) {
//     // Formula for area: πr^2
//     var area = Math.PI * Math.pow(radius, 2);

//     // Display the formula and steps
//     document.write("<p><strong>Area Calculation:</strong></p>");
//     document.write("<p>Formula: πr²</p>");
//     document.write("<p>Substitute radius (" + radius + "): π × " + radius + "²</p>");
//     document.write("<p>Approximate value: " + Math.PI.toFixed(2) + " × " + radius + " × " + radius + " = " + area.toFixed(2) + "</p>");
//     document.write("<p>The area is " + area.toFixed(2) + ".</p>");
// }

// // Prompt user to input the radius of the circle
// var radius = parseFloat(prompt("Enter the radius of the circle:"));

// // Check if the radius is a valid number
// if (isNaN(radius) || radius <= 0) {
//     document.write("<p>Please enter a valid positive number for the radius.</p>");
// } else {
//     // Call the functions to calculate circumference and area and show steps
//     calcCircumference(radius);
//     calcArea(radius);
// }