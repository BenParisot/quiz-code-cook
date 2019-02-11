const test = QUnit.test;

QUnit.module('rate scorecard');

function rateScorecard(scorecard) {
    const dwarf = scorecard.dwarf;
    const elf = scorecard.elf;
    const human = scorecard.human;

    if(dwarf > elf && dwarf > human) {
        return 'Dwarf';
    }

    else if(elf > dwarf && elf > human) {
        return 'Elf';
    }
    else {
        return 'Human';
    }
}

test('return "Dwarf" if dwarf outscores other characters', function(assert) {
    const scorecard = { dwarf: 1, elf: 0, human: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Dwarf';
    assert.equal(result, expected);
    
});

test('return "Elf" if dwarf outscores other characters', function(assert) {
    const scorecard = { dwarf: 0, elf: 1, human: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Elf';
    assert.equal(result, expected);
    
});

test('return "Human" if dwarf outscores other characters', function(assert) {
    const scorecard = { dwarf: 0, elf: 0, human: 1 };
    const result = rateScorecard(scorecard);
    const expected = 'Human';
    assert.equal(result, expected);
    
});