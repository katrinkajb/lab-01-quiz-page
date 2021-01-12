# lab-01-quiz-page

Outcomes:
    
    There should be an alert
    There should be a confirm so the user can opt out of the quiz
    There should be a first name and a last name prompt
    There should be 3 question prompts
    The user should be able to see their results after taking the quiz

HTML:
    Some info with an image and some list items
        -So user knows what to do
        -3 sections and an image
    button
        -to launch quiz
    An empty, secret div
        -to inject/display results

1) Get DOM elements
    -button
    -secret div
2) Add event listeners
    -button -->
3) Respond to user input (in the cool zone)
    -Launch an alert
    -Launch a confirmation
        If user says no, nothing else happens. Return nothing to break out of zone
        If user says yes, launch series of prompts -->
    -Launch first name prompt
        Store that output to display in the secret div
    -Launch last name prompt -->
        Store that output to display in the secret div --> -->
    -Launch quiz prompts with specific yes/no questions
        How do we evaluate answers?
        What counts as a yes?
            Anything that starts with a 'Y'
            How many times to we check this? up to 3 times
                Instead of copy/pasting, run a function that we can run each time. 'countsAsYes' function -->
    -Make a results string
    Display results string
        Inject stuff to the textContent of the secret div