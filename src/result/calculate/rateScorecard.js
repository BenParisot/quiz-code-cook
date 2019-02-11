function rateScorecard(scorecard) {
    const dwarf = scorecard.dwarf;
    const elf = scorecard.elf;
    const human = scorecard.human;

    if(dwarf > elf && dwarf > human) {
        return 'Dwarf';
    }

    if(elf > dwarf && elf > human) {
        return 'Elf';
    }
    if(human > dwarf && human > elf) {
        return 'Human';
    }
}

export default rateScorecard;