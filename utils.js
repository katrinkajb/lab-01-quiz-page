export function countsAsAYes(answer) {
    return answer.charAt(0).toUpperCase() === 'Y';
}


export function correctPercentage(correctAnswers) {
    return Math.round(Number(correctAnswers)/3 * 100);
}