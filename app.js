// import functions and grab DOM elements
const treeElem = document.getElementById('tree-select');
const groundElem = document.getElementById('ground-select');
const animalElem = document.getElementById('animal-select');

const treeDiv = document.getElementById('tree');
const groundDiv = document.getElementById('ground');
const animalDiv = document.getElementById('animal');

// let state
let treeCount = 0;

// set event listeners
treeElem.addEventListener('change', () => {
    console.log('show', treeElem.value);
    treeDiv.style.backgroundImage = `url('./assets/${treeElem.value}.jpg')`;
});

groundElem.addEventListener('change', () => {
    console.log('show', groundElem.value);
    groundDiv.style.backgroundImage = `url('./assets/${groundElem.value}.jpg')`;
});

animalElem.addEventListener('change', () => {
    console.log('show', animalElem.value);
    animalDiv.style.backgroundImage = `url('./assets/${animalElem.value}.jpg')`;
});
  // get user input

  // use user input to update state 
  // update DOM to reflect the new state
  // e.target.value