import { didUserWin } from "../utils.js";

// //user rock, computer rock - tie
// user rock, computer paper - lose / false
// user rock, computer scissors - win / true
// user paper, computer paper - tie
// user paper, computer rock - win / true
// user paper, computer scissors - lose / false
// user scissors, computer scissors - tie
// user scissors, computer rock - lose / false
// user scissors, computer paper - win /true

const test = QUnit.test;

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

test('user rock, computer paper', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('user rock, computer scissors', (expect) => {
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});
