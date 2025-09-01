// Q1.Given an array of numbers, describe logic to remove duplicates while preserving order. 

// Answer:

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const  onlyunique = Array.from(new Set(arr));
console.log(onlyunique); 
//logic : First we make a array and give it some duplicate value and we use a method of set to remove duplicate value and then we convert it to an array the set method convert array into unique mean if there is duplicate number it remove it automaticly and Arry.from() use to convert it into arry again.

// Q2.describe a basic validation logic: check that name , email contains email , and message are not empty and that email is valid@ . (4)
function validateForm() {
  clearErrors();

  let isValid = true;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (name === '') {
    displayError('nameError', 'Name is required.');
    isValid = false;
  }
  if (email === '') {
    displayError('emailError', 'Email is required.');
    isValid = false;
  } else if (!emailPattern.test(email)) {
    displayError('emailError', 'Please enter a valid email address.');
    isValid = false;
  }
  if (message === '') {
    displayError('messageError', 'Message cannot be empty.');
    isValid = false;
  }
  return isValid;
}

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearErrors() {
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
}
// Logic : We use trim() method to remove space from start and end of the string and then we use regular expression to check if the email is valid or not.


// Q3:Given an array of product names, describe logic to collect names that include a typed keyword

// Answer:  

const myproduct = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const newkeyword = 'an';
const Productsfilt = myproduct.filter(myproduct => myproduct.includes(newkeyword));
console.log(Productsfilt);
// Logic : We use filter() method to filter the array and we use includes() method to check if the product name includes the keyword which is given like an.