// import functions and grab DOM elements
const treeElem = document.getElementById('tree-select');
const groundElem = document.getElementById('ground-select');
const animalElem = document.getElementById('animal-select');
const countElem = document.getElementById('count');

const treeDiv = document.getElementById('tree');
const groundDiv = document.getElementById('ground');
const animalDiv = document.getElementById('animal');

const callElem = document.getElementById('call');
const buttonElem = document.getElementById('call-button');
const callList = document.getElementById('call-list');

// let state
let treeCount = 0;
let groundCount = 0;
let animalCount = 0;

let calls = [];

// console.log('hi', calls);
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
    displayStats();
});

animalElem.addEventListener('change', () => {
    console.log('show', animalElem.value);
    animalDiv.style.backgroundImage = `url('./assets/${animalElem.value}.jpg')`;
    animalCount++;
    displayStats();
});

buttonElem.addEventListener('click', () => {
    calls.push(callElem.value);
    console.log('hi', calls);
    displayCall();
    callElem.value = '';
});
  // get user input
function displayStats() {
    countElem.textContent = `You have planted trees ${treeCount} time(s), planted ground cover ${groundCount} time(s), and pet animals ${animalCount} time(s).`;
}

function displayCall() {
    callList.textContent = '';
    for (let phrase of calls) {
        const callText = document.createElement('li');
        callText.textContent = phrase;
        callList.append(callText);
    }
}
  // use user input to update state 
  // update DOM to reflect the new state
  // e.target.value