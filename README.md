<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disillusionment Quiz</title>
    
</head>
<body>
  <style>
    body {
    font-family: Arial, sans-serif;
    background-color: #e0f7f8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background: white;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 400px;
}

.progress-bar {
    background: #f3f3f3;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 1em;
}

.progress {
    height: 10px;
    background: #00aaff;
    width: 5%;
    transition: width 0.3s ease;
}

.question-container {
    margin-bottom: 1em;
}

.options label {
    display: block;
    margin: 0.5em 0;
}

.navigation button {
    background: #00aaff;
    color: white;
    border: none;
    padding: 0.5em 1em;
    margin: 0.5em;
    border-radius: 5px;
    cursor: pointer;
}

.navigation button:disabled {
    background: #ccc;
}

.navigation button:hover:not(:disabled) {
    background: #0077cc;
}
</style>
    <div class="container">
        <h1>Are You Disillusioned?</h1>
        <div class="quiz-container">
            <div class="progress-bar">
                <div class="progress" id="progress"></div>
            </div>
            <div class="question-container">
                <h2 id="question">I have ambitious aims of making a difference.</h2>
                <div class="options">
                    <label>
                        <input type="radio" name="answer" value="1"> Strongly Disagree
                    </label>
                    <label>
                        <input type="radio" name="answer" value="2"> Disagree
                    </label>
                    <label>
                        <input type="radio" name="answer" value="3"> Neutral
                    </label>
                    <label>
                        <input type="radio" name="answer" value="4"> Agree
                    </label>
                    <label>
                        <input type="radio" name="answer" value="5"> Strongly Agree
                    </label>
                </div>
            </div>
            <div class="navigation">
                <button id="prev" onclick="prevQuestion()">Prev</button>
                <button id="next" onclick="nextQuestion()">Next</button>
                <button id="submit" onclick="submitQuiz()">Submit</button>
            </div>
        </div>
    </div>
    <script>
    const questions = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full-time service or ministry.",
    // Add more questions here as needed
];

let currentQuestionIndex = 0;
const answers = [];

function updateQuestion() {
    document.getElementById('question').innerText = questions[currentQuestionIndex];
    document.getElementById('progress').style.width = `${(currentQuestionIndex + 1) / questions.length * 100}%`;
    document.getElementById('prev').disabled = currentQuestionIndex === 0;
    document.getElementById('next').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
    
    const selectedAnswer = answers[currentQuestionIndex];
    if (selectedAnswer !== undefined) {
        document.querySelector(`input[name="answer"][value="${selectedAnswer}"]`).checked = true;
    } else {
        document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        answers[currentQuestionIndex] = selectedOption.value;
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
}

function submitQuiz() {
    saveAnswer();
    console.log('Quiz Submitted:', answers);
    // Redirect to the Thank You page
    window.location.href = 'thankyou.html';
}

document.addEventListener('DOMContentLoaded', () => {
    updateQuestion();
});


    </script>
</body>
</html>
