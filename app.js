// import functions and grab DOM elements
const treeElem = document.getElementById('tree-select');
const groundElem = document.getElementById('ground-select');
const animalElem = document.getElementById('animal-select');
const countElem = document.getElementById('count');

const treeDiv = document.getElementById('tree');
const groundDiv = document.getElementById('ground');
const animalDiv = document.getElementById('animal');



// let state
let treeCount = 0;
let groundCount = 0;
let animalCount = 0;

let calls = [];

// set event listeners
treeElem.addEventListener('change', () => {
    console.log('show', treeElem.value);
    treeDiv.style.backgroundImage = `url('./assets/${treeElem.value}.jpg')`;
    treeCount++;
    displayStats();
});

groundElem.addEventListener('change', () => {
    console.log('show', groundElem.value);
    groundDiv.style.backgroundImage = `url('./assets/${groundElem.value}.jpg')`;
    groundCount++;
});

animalElem.addEventListener('change', () => {
    console.log('show', animalElem.value);
    animalDiv.style.backgroundImage = `url('./assets/${animalElem.value}.jpg')`;
    animalCount++;
});
  // get user input
function displayStats() {
    countElem.textContent = `You have planted trees ${treeCount} times, selected ground cover ${groundCount} times, and pet animals ${animalCount} times.`;
}
  // use user input to update state 
  // update DOM to reflect the new state
  // e.target.value