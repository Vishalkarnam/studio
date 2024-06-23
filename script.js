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

