import { expect } from "chai";
import { convertStringNumbersToIntArray, getQuantityOfWinningNums, getCardDetails } from "../Src/helpers.js";
import { Cards } from "./testData.js";

describe('getCardDetails()', () => {
    it('card One', () => {
        const input = Cards.One, expectedResult = {
            cardNumber: 1,
            winningNums: [41,48,83,86,17],
            playingNums: [83,86,6,31,17,9,48,53],
            quantityOfWinningNums: 4
        };
        const result = getCardDetails(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Two', () => {
        const input = Cards.Two, expectedResult = {
            cardNumber: 2,
            winningNums: [13,32,20,16,61],
            playingNums: [61,30,68,82,17,32,24,19],
            quantityOfWinningNums: 2
        };
        const result = getCardDetails(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Three', () => {
        const input = Cards.Three, expectedResult = {
            cardNumber: 3,
            winningNums: [1,21,53,59,44],
            playingNums: [69,82,63,72,16,21,14,1],
            quantityOfWinningNums: 2
        };
        const result = getCardDetails(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Four', () => {
        const input = Cards.Four, expectedResult = {
            cardNumber: 4,
            winningNums: [41,92,73,84,69],
            playingNums: [59,84,76,51,58,5,54,83],
            quantityOfWinningNums: 1
        };
        const result = getCardDetails(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Five', () => {
        const input = Cards.Five, expectedResult = {
            cardNumber: 5,
            winningNums: [87,83,26,28,32],
            playingNums: [88,30,70,12,93,22,82,36],
            quantityOfWinningNums: 0
        };
        const result = getCardDetails(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Six', () => {
        const input = Cards.Six, expectedResult = {
            cardNumber: 6,
            winningNums: [31,18,13,56,72],
            playingNums: [74,77,10,23,35,67,36,11],
            quantityOfWinningNums: 0
        };
        const result = getCardDetails(input);
        expect(result).to.deep.equal(expectedResult);
    });
});

describe('convertStringNumbersToIntArray()', () => {
    it('card One: winning nums', () => {
        const input = ' 41 48 83 86 17', expectedResult = [41,48,83,86,17];
        const result = convertStringNumbersToIntArray(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card One: playing nums', () => {
        const input = ' 83 86  6 31 17  9 48 53', expectedResult = [83,86,6,31,17,9,48,53];
        const result = convertStringNumbersToIntArray(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Two: winning nums', () => {
        const input = " 13 32 20 16 61 ", expectedResult = [13,32,20,16,61];
        const result = convertStringNumbersToIntArray(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Two: playing nums', () => {
        const input = " 61 30 68 82 17 32 24 19 ", expectedResult = [61,30,68,82,17,32,24,19];
        const result = convertStringNumbersToIntArray(input);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card mixed: given alphanumeric string -> only returns numeric values as ints', () => {
        const input = " 61 fg kop]k eofpe j[jf po wa[jjfie ahfuh huref ua    jifoeh a   hriuhg 0 00 30 68 82 17 32 24 19 ", expectedResult = [61,0,0,30,68,82,17,32,24,19];
        const result = convertStringNumbersToIntArray(input);
        expect(result).to.deep.equal(expectedResult);
    });
});

describe('getQuantityOfWinningNums()', () => {
    it('card One', () => {
        const winningNums = [41,48,83,86,17];
        const playingNums = [83,86,6,31,17,9,48,53];
        const expectedResult = 4;
        const result = getQuantityOfWinningNums(winningNums, playingNums);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Two', () => {
        const winningNums = [13,32,20,16,61];
        const playingNums = [61,30,68,82,17,32,24,19];
        const expectedResult = 2;
        const result = getQuantityOfWinningNums(winningNums, playingNums);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Three', () => {
        const winningNums = [1,21,53,59,44];
        const playingNums = [69,82,63,72,16,21,14,1];
        const expectedResult = 2;
        const result = getQuantityOfWinningNums(winningNums, playingNums);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Four', () => {
        const winningNums = [41,92,73,84,69];
        const playingNums = [59,84,76,51,58,5,54,83];
        const expectedResult = 1;
        const result = getQuantityOfWinningNums(winningNums, playingNums);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Five', () => {
        const winningNums = [87,83,26,28,32];
        const playingNums = [88,30,70,12,93,22,82,36];
        const expectedResult = 0;
        const result = getQuantityOfWinningNums(winningNums, playingNums);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Six', () => {
        const winningNums = [31,18,13,56,72];
        const playingNums = [74,77,10,23,35,67,36,11];
        const expectedResult = 0;
        const result = getQuantityOfWinningNums(winningNums, playingNums);
        expect(result).to.deep.equal(expectedResult);
    });
});
