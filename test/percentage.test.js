// IMPORT MODULES under test here:
import {correctPercentage} from '../utils.js';

const test = QUnit.test;

test('correctPercentage', (expect) => {
    // 3 out of 3 = 100%
    const expected = 100;
    
    const actual = correctPercentage(3);

    expect.equal(actual, expected);
});

test('correctPercentage', (expect) => {
    // 2 out of 3 = 67% (after rounding)
    const expected = 67;
    
    const actual = correctPercentage(2);

    expect.equal(actual, expected);
});

test('correctPercentage', (expect) => {
    // 1 out of 3 = 34%
    const expected = 33;
    
    const actual = correctPercentage(1);

    expect.equal(actual, expected);
});

test('correctPercentage', (expect) => {
    // 0 out of 3 = 34%
    const expected = 0;
    
    const actual = correctPercentage(0);

    expect.equal(actual, expected);
});