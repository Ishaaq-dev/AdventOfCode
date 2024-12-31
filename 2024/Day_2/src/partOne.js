export function valuateLevels(levels) {
    const firstLevel = levels[0], secondLevel = levels[1];
    const isAsc = firstLevel - secondLevel;

    if(isAsc < 0) 
        return validateAsc(levels);
    else if(isAsc > 0)
        return validateDesc(levels);
    else 
        return 0;
}

function validateAsc(levels) {
    let previousValue = levels[0], isValid = true;
    for (let i=1; i<levels.length; i++) {
        const difference = previousValue - levels[i];
        if (difference > -1 || difference < -3){
            isValid = false;
            i = levels.length + 1;
        }
        previousValue = levels[i];
    }

    return isValid ? 1 : 0;
}

function validateDesc(levels) {
    let previousValue = levels[0], isValid = true;
    for (let i=1; i<levels.length; i++) {
        const difference = previousValue - levels[i];
        if (difference < 1 || difference > 3){
            isValid = false;
            i = levels.length + 1;
        }
        previousValue = levels[i];
    }

    return isValid ? 1 : 0;
}