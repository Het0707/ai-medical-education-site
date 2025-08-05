let current = 0;
let score = 0;

function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").innerText = q.q;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "option-button fade-in";
        btn.onclick = () => checkAnswer(opt);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = questions[current].answer;
    if (selected === correct) score++;
    current++;
    nextQuestion();
}

function nextQuestion() {
    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML =
            `<h3>Quiz Completed</h3><p>Your Score: ${score}/${questions.length}</p>`;
    }
}

window.onload = loadQuestion;
