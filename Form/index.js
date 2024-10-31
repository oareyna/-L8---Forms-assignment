
const form = document.getElementById('myForm'); 
// JavaScript code for form validation
 
// Prevent form from submitting
const outputMessage = document.getElementById('output')
form.addEventListener('submit', function(event) {
 
event.preventDefault();
 
// Retrieve the input field value
let inputField = document.getElementById('inputField')
 
 
// Regular expression pattern for alphanumeric input
const aRegex = /^[a-zA-Z0-9]*$/
if (!aRegex.test(inputField.value)) {
 /*outputMessage.textContent = 'Invalid!';
 outputMessage.style.textAlign = 'center';*/
 alert("Invalid!")
 return;}
 
// Check if the input value matches the pattern
 
// Valid input: display confirmation and submit the form
else {
 alert("Form submitted!")
 /*
 outputMessage.style.textAlign = 'center';
 outputMessage.textContent = `Form submitted!`;
 */
}
 
// Invalid input: display error message
 
})
