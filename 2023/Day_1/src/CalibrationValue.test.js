import { expect } from "chai";
import { getCalibrationValue } from "./CalibrationValue.js";

describe('getCalibrationValue() tests', () => {
    describe('should return only numeric values', () => {
        it('1abc2 -> 12', () => {
            const inputData = '1abc2', expectedValue = 12;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('pqr3stu8vwx -> 38', () => {
            const inputData = 'pqr3stu8vwx', expectedValue = 38;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('a1b2c3d4e5f -> 15', () => {
            const inputData = 'a1b2c3d4e5f', expectedValue = 15;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('treb7uchet -> 77', () => {
            const inputData = 'treb7uchet', expectedValue = 77;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
    });
    describe('should account for spelt out numbers', () => {
        it('two1nine -> 29', () => {
            const inputData = 'two1nine', expectedValue = 29;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('eightwothree -> 83', () => {
            const inputData = 'eightwothree', expectedValue = 83;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('abcone2threexyz -> 13', () => {
            const inputData = 'abcone2threexyz', expectedValue = 13;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('xtwone3four -> 24', () => {
            const inputData = 'xtwone3four', expectedValue = 24;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('4nineeightseven2 -> 42', () => {
            const inputData = '4nineeightseven2', expectedValue = 42;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('zoneight234 -> 14', () => {
            const inputData = 'zoneight234', expectedValue = 14;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('7pqrstsixteen -> 76', () => {
            const inputData = '7pqrstsixteen', expectedValue = 76;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
    });

    describe('checks if line starts and ends with numeric value', () => {
        it('3four4 -> 34', () => {
            const inputData = '3four4', expectedValue = 34;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('72666gxzflnsfqmndjdscvqmcqls5 -> 75', () => {
            const inputData = '72666gxzflnsfqmndjdscvqmcqls5', expectedValue = 75;

            const response = getCalibrationValue(inputData);
            expect(response).to.equal(expectedValue);
        });
    });
});