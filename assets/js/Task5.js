// C : Write a function that returns the largest number from an array and log the result.
// C:
function largestNumber(arr) {
    return Math.max(...arr);
}
console.log(largestNumber([1, 2, 3, 4, 5]));

// B• Write a function to reverse a string and log the result
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello hy how are you"));

// A: Implement a button that counts clicks and shows the count next to it.
const button = document.querySelector("button");
let count = 0;
button.addEventListener("click", () => {
    button.textContent = `Clicked ${count} times`;
     count++;
});
console.log(count);

//  TASK 5 — JS coding problems (20 marks0)