import { didUserWin } from '../utils.js';

const test = QUnit.test;
// user rock, computer rock - tie
test('user rock, computer rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'tie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// user rock, computer paper - lose / false
test('user rock, computer paper', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

// user rock, computer scissors - win / true
test('user rock, computer scissors', (expect) => {
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});

// user paper, computer paper - tie
test('user paper, computer paper', (expect) => {
    const expected = 'tie';
    const actual = didUserWin('paper', 'paper');
    expect.equal(actual, expected);
});

// user paper, computer rock - win / true
test('user paper, computer rock', (expect) => {
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});

// user paper, computer scissors - lose / false
test('user paper, computer scissors', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('paper', 'scissors');
    expect.equal(actual, expected);
});

// user scissors, computer scissors - tie
test('user scissors, computer scissors', (expect) => {
    const expected = 'tie';
    const actual = didUserWin('scissors', 'scissors');
    expect.equal(actual, expected);
});

// user scissors, computer rock - lose / false
test('user scissors, computer rock', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('scissors', 'rock');
    expect.equal(actual, expected);
});

// user scissors, computer paper - win /true
test('user scissors, computer paper', (expect) => {
    const expected = 'win';
    const actual = didUserWin('scissors', 'paper');
    expect.equal(actual, expected);
});