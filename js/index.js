// Your code goes here

//Mouseover
document.querySelectorAll("a").forEach(element => {
  element.addEventListener('mouseover',() => {
    element.style.color= "red";
  })
});

// Double Click
document.querySelectorAll("h2").forEach(element => {
  element.addEventListener("dblclick",() => {
    element.style.color= "orange";
  })
});