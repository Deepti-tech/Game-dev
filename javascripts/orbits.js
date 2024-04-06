const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

const planets = document.querySelectorAll('.droppable')
var p_radii = [127,112,97,84,60,50,35,25]
var p_orbits = document.querySelectorAll('.orbit')

p_orbits.forEach((p_orbit, index)=>{
  p_orbit.style.height = `${p_radii[index]}vmin`
  p_orbit.style.width = `${p_radii[index]}vmin`
})

planets.forEach((planet, index) =>{
   if(index == 4 || index == 6 || index == 2 || index == 0){
      planet.style.top= `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${0.5*p_radii[index]}vmin`}
   else if(index == 1 || index == 3 || index == 5){
      planet.style.top = `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${-0.5*p_radii[index]}vmin`
   }
   else if(index == 7){
      planet.style.top = `${0.5*p_radii[index]}vmin`;
      planet.style.left = `${-0.45*p_radii[index]}vmin`
   }
})
