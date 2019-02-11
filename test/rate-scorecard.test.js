const test = QUnit.test;

QUnit.module('rate scorecard');

function rateScorecard(scorecard) {
    const dwarf = scorecard.dwarf;
    const elf = scorecard.elf;
    const human = scorecard.human;

    if(dwarf > elf && dwarf > human) {
        return 'Dwarf';
    }
}

test('return "Dwarf" if dwarf outscores other characters', function(assert) {
    const scorecard = { dwarf: 1, elf: 0, human: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Dwarf';
    assert.deepEqual(result, expected);
    
});