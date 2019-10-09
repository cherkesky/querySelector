// Exercise 1
const myBlogText = document.querySelector (".article__header");
myBlogText.textContent = "Welcome to the Guy blog";
console.log ("Exercise 1 ", myBlogText.textContent);
// Exercise 2
const getAllHeaders = document.querySelectorAll (".article__header");
for (i=0; i < getAllHeaders.length; i++ ){
  getAllHeaders[i].classList.add("important");
  console.log ("Exercise 2 ", getAllHeaders[i].classList);
}

// Exercise 3
const removeDashed = document.querySelector (".dashed");
removeDashed.classList.remove("dashed");
console.log ("Exercise 3 ", removeDashed.classList);

// Exercise 4
const addClass = document.querySelector (".article__footer");
addClass.classList.add("goldenrod");
console.log ("Exercise 4 ", addClass.classList);


