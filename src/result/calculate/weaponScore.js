function weaponScore(weapon, scorecard) {
    if(weapon === 'axe') {
        scorecard.dwarf += 1;
    }
    else if(weapon === 'bow') {
        scorecard.elf += 1;
    }
    else {
        scorecard.human += 1;
    }
    return scorecard;
}

export default weaponScore;