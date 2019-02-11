import weaponScore from '../src/weaponScore.js';

const quizFormNode = document.getElementById('quiz');



quizFormNode.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let scorecard = { dwarf: 0, elf: 0, human: 0 };
    const formData = new FormData(quizFormNode);
    const answers = {
        weapon: formData.get('weapons')
        //pass the input name attribute as the argument for the get method on FormData objects and it will automatically get the selected option
    };
    const weapon = answers.weapon;

    weaponScore(weapon, scorecard);

    console.log(scorecard);


});

