import { countsAsAYes , correctPercentage } from './utils.js'

const quizButton = document.getElementById('quiz-button');
const resultsDisplay = document.getElementById('results-area');


quizButton.addEventListener('click', () => {
    alert("Let's take a quiz on what we learned!")
    const confirmation = confirm('Do you want to take my quiz about nudibranchs?');
        if (!confirmation) 
            return;
    let correctAnswers = 0;

    const firstName = prompt('What is your first name?')
    // const responseFirst = firstName.textContent
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
    
    const resultsString100 = `Congrats ${firstName} ${lastName}! You got ${correctPercentage(correctAnswers)}% correct!`;
    const resultsString66 = `Not bad, ${firstName} ${lastName}. You got ${correctPercentage(correctAnswers)}% correct!`;
    const resultsString33 = `You did OK, ${firstName} ${lastName}. You got ${correctPercentage(correctAnswers)}% correct.`;
    const resultsString0 = `Did you even read the info, ${firstName} ${lastName}?! You got ${correctPercentage(correctAnswers)}% correct.`;
    
    if (correctAnswers === 3)
        {resultsDisplay.textContent = resultsString100;
        resultsDisplay.style.backgroundColor = 'green'}
    else if (correctAnswers === 2)
        {resultsDisplay.textContent = resultsString66;
        resultsDisplay.style.backgroundColor = 'yellow'}
    else if (correctAnswers === 1)
        {resultsDisplay.textContent = resultsString33;
        resultsDisplay.style.backgroundColor = 'orange'}
    else
        {resultsDisplay.textContent = resultsString0;
        resultsDisplay.style.backgroundColor = 'red'};
})