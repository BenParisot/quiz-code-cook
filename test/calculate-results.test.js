const test = QUnit.test;
QUnit.module('calculate results');

import weaponScore from '../src/result/calculate/weaponScore.js';
import rateScorecard from '../src/result/calculate/rateScorecard.js';

//calculate results runction takes answers object as argument
function calculateResults(answers) {
    //declare scorecard
    const scorecard = { dwarf: 0, elf: 0, human: 0 };
    //update scorecard
    weaponScore(answers.weapon, scorecard);
    //analyze scorecard
    const result = rateScorecard(scorecard);
    return result;
}

test('return "Dwarf" as answer if axe is higher points on scorecard', function(assert) {
    const answers = {
        weapon: 'axe'
    };
    const result = calculateResults(answers);
    const expected = 'Dwarf';

    assert.equal(result, expected);
});