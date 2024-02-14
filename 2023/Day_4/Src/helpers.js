export function getWinningAndPlayingNums(card) {
    const cardSplit = card.split(':');
    const numbersSplit = cardSplit[1].split('|');

    const winningNums = convertStringNumbersToIntArray(numbersSplit[0]);
    const playingNums = convertStringNumbersToIntArray(numbersSplit[1]);

    return { winningNums, playingNums }
}

export function convertStringNumbersToIntArray(stringNumbers) {
    const intNumbersArray = [];
    const stringNumbersArray = stringNumbers.trim().split(' ');
    stringNumbersArray.forEach(stringNumber => {
        const intNumber = parseInt(stringNumber);;
        if(!isNaN(intNumber)) intNumbersArray.push(intNumber);
    });

    return intNumbersArray;
}

export function getQuantityOfWinningNums(winningNumsArray, playingNumsArray) {
    let quantityOfWinningNums = 0;
    winningNumsArray.forEach(winningNum => {
        if(playingNumsArray.includes(winningNum)) quantityOfWinningNums++;
    });
    return quantityOfWinningNums;
}
