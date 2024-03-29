export function getCardDetails(card) {
    const cardSplit = card.split(':');
    const cardDetailSplit = cardSplit[0].split(' ');
    const numbersSplit = cardSplit[1].split('|');

    const sanitisedCardDetailSplit = cardDetailSplit.filter(cardDetail => cardDetail);

    const cardNumber = parseInt(sanitisedCardDetailSplit[1].trim());
    const winningNums = convertStringNumbersToIntArray(numbersSplit[0]);
    const playingNums = convertStringNumbersToIntArray(numbersSplit[1]);

    const quantityOfWinningNums = getQuantityOfWinningNums(winningNums, playingNums);

    return { cardNumber, winningNums, playingNums, quantityOfWinningNums }
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
