const answersJSON = window.localStorage.getItem('answers');
import calculateResults from './calculate/calculateResults.js';
let answers = null;
if(answersJSON) {
    answers = JSON.parse(answersJSON);
}
else {
    window.location = '/';
}

const characterNode = document.getElementById('character');
const result = calculateResults(answers);
characterNode.textContent = result;

console.log(answers);