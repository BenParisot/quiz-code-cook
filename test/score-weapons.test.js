const test = QUnit.test;

QUnit.module('weapons score'); //a header that allows you to name tests, useful for when a lot of tests are running at the same time

function weaponScore(weapon, scorecard) {
    if(weapon === 'axe') {
        scorecard.dwarf += 1;
    }
    else if(weapon === 'bow') {
        scorecard.elf += 1;
    }
    else if(weapon === 'sword') {
        scorecard.human += 1;
    }

    return scorecard;
}

test('adds 1 to dwarf in scorecard if axe is chosen', function(assert) {
    const scorecard = { dwarf: 0, elf: 0, human: 0 };
    const expected = { dwarf: 1, elf: 0, human: 0 };
    let result = weaponScore('axe', scorecard);

    assert.deepEqual(result, expected);
});

test('adds 1 to elf in scorecard if bow is chosen', function(assert) {
    const scorecard = { dwarf: 0, elf: 0, human: 0 };
    const expected = { dwarf: 0, elf: 1, human: 0 };
    let result = weaponScore('bow', scorecard);

    assert.deepEqual(result, expected);
});

test('adds 1 to human in scorecard if sword is chosen', function(assert) {
    const scorecard = { dwarf: 0, elf: 0, human: 0 };
    const expected = { dwarf: 0, elf: 0, human: 1 };
    let result = weaponScore('sword', scorecard);

    assert.deepEqual(result, expected);
});