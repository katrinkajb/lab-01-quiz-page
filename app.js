import {countsAsAYes} from './utils.js'

const quizButton = document.getElementById('quiz-button');
const resultsDisplay = document.getElementById('results-area');


quizButton.addEventListener('click', () => {
    alert("Let's take a quiz on what we learned!")
    const confirmation = confirm('Do you want to take my quiz about nudibranchs?');
        if (!confirmation) 
            return;
    let correctAnswers = 0;

    const firstName = prompt('What is your first name?')
    const lastName = prompt('What is your last name?')

    const answer1 = prompt('Does the word "nudibranch" come from both greek and latin? Yes/No')
    if (countsAsAYes(answer1))
        correctAnswers++;
    
    const answer2 = prompt('Is it true that nudibranchs primarily live in fresh water? Yes/No')
    if (!countsAsAYes(answer2))
        correctAnswers++;

    const answer3 = prompt('Is it true that nudibranchs come in many color patterns? Yes/No')
    if (countsAsAYes(answer3))
        correctAnswers++;
    
    const resultsArea = document.getElementById('results-area');
    const resultsString = `Hi ${firstName} ${lastName}! You got ${correctAnswers} correct!`;
    resultsArea.textContent = resultsString;
})