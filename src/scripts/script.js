// Exercise 1
const myBlogText = document.querySelector (".article__header");
myBlogText.textContent = "Welcome to the Guy blog";
// Exercise 2
const getAllHeaders = document.querySelectorAll (".article__header");
for (i=0; i < getAllHeaders.length; i++ ){
  getAllHeaders[i].classList.add("important");
}
