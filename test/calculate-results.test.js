const test = QUnit.test;
QUnit.module('calculate results');

import calculateResults from '../src/result/calculate/calculateResults.js';

test('return "Dwarf" as answer if dwarf has higher points on scorecard', function(assert) {
    const answers = {
        weapon: 'axe'
    };
    const result = calculateResults(answers);
    const expected = 'Dwarf';

    assert.equal(result, expected);
});