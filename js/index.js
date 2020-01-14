// Your code goes here

//#1 Mouseover 'a' red
document.querySelectorAll('a').forEach(element => {
  element.addEventListener('mouseover',() => {
    element.style.color= 'red';
  })
});

//#2 DoubleClick h2 Orange
document.querySelectorAll('h2').forEach(element => {
  element.addEventListener('dblclick',() => {
    element.style.color= 'orange';
  })
});

//#3 & #4 Mouse Enter/Leave
 const funbus = document.querySelector('.intro img');

 funbus.addEventListener('mouseenter', () => {
   funbus.style.transform = 'scale(1.2)';
   funbus.style.transition = "transform 0.2s";
 });
 funbus.addEventListener('mouseleave', () => {
   funbus.style.transform = 'scale(1)';
   funbus.style.transition = 'transform 0.2s';
 });

//#5 Click Footer
 const footer = document.querySelector('footer');
 footer.addEventListener('click', () => {
  footer.style.backgroundColor = 'red';
});

//#6 KeyDown All
const island = document.querySelector('*');
document.addEventListener('keydown', () => {
island.style.color= 'blue';
});
 
//#7 Resize intro image (wheel)
const resize = document.querySelector('.intro img');
funbus.addEventListener('wheel', () => {
  resize.style.transform = 'scale(2)';
});

//#8 Keyup
const keyUp = document.querySelector('*');
document.addEventListener('keyup', () => {
  keyUp.style.color= "red"; 
})

//#9 Mouseout
document.querySelectorAll('h2').forEach(element => {
 element.addEventListener('mouseout',() => {
 element.style.transform= 'scale(2.5)';
  })
});

//#10 Mouse Enter
const enter = document.querySelector('*');
document.addEventListener('mouseenter', () => {
  enter.style.color= "pink"; 
})
 