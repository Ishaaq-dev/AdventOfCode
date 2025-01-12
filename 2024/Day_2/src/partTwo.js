export function evaluateLevels(levels) {
    const description = getDescription(levels);
    console.log(`${levels}: ${description}`);
    return description;
}

function getDescription(levels) {
    const vals = { ASC: 0, DESC: 0, EQ: 0 };
    for (let i=0; i<levels.length; i++) {
        const levelA = levels[i], levelB = levels[i+1];

        if (levelA && levelB) {
            const difference = getDifference(levelA, levelB);
            vals[difference.description]++;
        }
    }

    if (vals.ASC > vals.DESC && vals.ASC > vals.EQ)
        return 'ASC';
    else if (vals.DESC > vals.ASC && vals.DESC > vals.EQ)
        return 'DESC';
    else if (vals.EQ > vals.ASC && vals.EQ > vals.DESC)
        return 'EQ';
    else {
        console.warn(`${levels} : an equal number of combos : ${vals}`);
        return 'SKIP';
    }
}

function getDifference(levelA, levelB) {
    let description = '';
    const difValue = levelA - levelB;
    if (difValue > 0)
        description = 'DESC'
    else if (difValue < 0)
        description = 'ASC';
    else
        description = 'EQ';

    return { difValue, description }
}