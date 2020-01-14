// Your code goes here

//#1 
document.querySelectorAll('a').forEach(element => {
  element.addEventListener('mouseover',() => {
    element.style.color= 'red';
  })
});

//#2 
document.querySelectorAll('h2').forEach(element => {
  element.addEventListener('dblclick',() => {
    element.style.color= 'orange';
  })
});

//#3 
 const funbus = document.querySelector('.intro img');

 funbus.addEventListener('mouseenter', () => {
   funbus.style.transform = 'scale(1.2)';
   funbus.style.transition = "transform 0.2s";
 });
 funbus.addEventListener('mouseleave', () => {
   funbus.style.transform = 'scale(1)';
   funbus.style.transition = 'transform 0.2s';
 });

 //#4
 const footer = document.querySelector('footer');

 footer.addEventListener('click', () => {
     footer.style.backgroundColor = 'red';
});