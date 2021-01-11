// IMPORT MODULES under test here:
import {countsAsAYes} from '../utils.js';

const test = QUnit.test;

test('countsAsAYes', (expect) => {
    // accept 'Yep' and as true
    const expected = true;
    
    const actual = countsAsAYes('yep');

    expect.equal(actual, expected);
});

test('countsAsAYes', (expect) => {
    // accept 'Yawn' and as true
    const expected = true;
    
    const actual = countsAsAYes('yawn');

    expect.equal(actual, expected);
});

test('countsAsAYes', (expect) => {
    //test that 'Nah" will be counted as false
  
    const expected = false;
    
    const actual = countsAsAYes('nah');

    expect.equal(actual, expected);
});

test('countsAsAYes', (expect) => {
    //test that 'I don't think so" will be counted as false
  
    const expected = false;
    
    const actual = countsAsAYes('I don"t think so');

    expect.equal(actual, expected);
});