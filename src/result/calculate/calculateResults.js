import rateScorecard from './rateScorecard.js';
import weaponScore from './weaponScore.js';

function calculateResults(answers) {
    //declare scorecard
    const scorecard = { dwarf: 0, elf: 0, human: 0 };
    //update scorecard
    weaponScore(answers.weapon, scorecard);
    //analyze scorecard
    const result = rateScorecard(scorecard);
    return result;
}

export default calculateResults;