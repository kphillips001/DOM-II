// Your code goes here

//Mouseover
document.querySelectorAll("a").forEach(element => {
  element.addEventListener("mouseover",() => {
    element.style.color= "red";
  })
});