document.addEventListener('DOMContentLoaded', function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const messageElement = document.getElementById('message');
    const guessInput = document.getElementById('guessInput');
    const submitBtn = document.getElementById('submitBtn');
    const hintElement = document.getElementById('hint');
    const attemptsElement = document.getElementById('attempts');
    const restartBtn = document.getElementById('restartBtn');

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        
        messageElement.textContent = 'Я загадал новое число. Попробуй угадать!';
        hintElement.textContent = '';
        hintElement.className = '';
        attemptsElement.textContent = 'Попыток: 0';
        guessInput.value = '';
        guessInput.disabled = false;
        submitBtn.disabled = false;
        restartBtn.style.display = 'none';
        guessInput.focus();
    }

    submitBtn.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            hintElement.textContent = 'Пожалуйста, введи число от 1 до 100!';
            hintElement.className = 'correct';
            return;
        }

        attempts++;
        attemptsElement.textContent = `Попыток: ${attempts}`;

        if (userGuess === randomNumber) {
            messageElement.textContent = 'Поздравляем! Ты угадал!';
            hintElement.textContent = `Загаданное число: ${randomNumber}`;
            hintElement.className = 'correct';
            submitBtn.disabled = true;
            guessInput.disabled = true;
            restartBtn.style.display = 'block';
        } else if (userGuess < randomNumber) {
            hintElement.textContent = 'Загаданное число больше!';
            hintElement.className = 'hint-higher';
        } else {
            hintElement.textContent = 'Загаданное число меньше!';
            hintElement.className = 'hint-lower';
        }

        guessInput.value = '';
        guessInput.focus();
    });

    restartBtn.addEventListener('click', resetGame);

    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
});