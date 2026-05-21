class ArithmeticGame {
    constructor() {
        this.score = 0;
        this.total = 0;
        this.currentAnswer = null;

        this.taskElement = document.getElementById('task');
        this.answerInput = document.getElementById('answerInput');
        this.resultElement = document.getElementById('result');
        this.scoreElement = document.getElementById('score');
        this.checkButton = document.getElementById('checkBtn');
        this.newTaskButton = document.getElementById('newTaskBtn');

        this.init();
    }

    init() {
        this.generateTask();
        this.updateScore();

        this.checkButton.addEventListener('click', () => this.checkAnswer());
        this.newTaskButton.addEventListener('click', () => this.generateNewTask());

        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });
    }

    generateTask() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let num1, num2;

        switch (operation) {
            case '+':
                num1 = Math.floor(Math.random() * 50) + 1;
                num2 = Math.floor(Math.random() * 50) + 1;
                this.currentAnswer = num1 + num2;
                break;
            case '-':
                num1 = Math.floor(Math.random() * 100) + 1;
                num2 = Math.floor(Math.random() * num1) + 1;
                this.currentAnswer = num1 - num2;
                break;
            case '*':
                num1 = Math.floor(Math.random() * 12) + 1;
                num2 = Math.floor(Math.random() * 12) + 1;
                this.currentAnswer = num1 * num2;
                break;
            case '/':
                num2 = Math.floor(Math.random() * 10) + 1;
                const result = Math.floor(Math.random() * 10) + 1;
                num1 = num2 * result;
                this.currentAnswer = result;
                break;
        }

        const displayOperation = operation === '*' ? '×' : operation === '/' ? '÷' : operation;
        this.taskElement.textContent = `${num1} ${displayOperation} ${num2}`;
    }

    checkAnswer() {
        const userAnswer = parseFloat(this.answerInput.value);

        if (isNaN(userAnswer)) {
            this.resultElement.textContent = 'Пожалуйста, введите число!';
            this.resultElement.className = 'arithmetic__result';
            return;
        }

        this.total++;

        if (userAnswer === this.currentAnswer) {
            this.resultElement.textContent = 'Правильно! Молодец!';
            this.resultElement.className = 'arithmetic__result correct';
            this.score++;
            setTimeout(() => this.generateNewTask(), 500);
        } else {
            this.resultElement.textContent = 'Неправильно.';
            this.resultElement.className = 'arithmetic__result incorrect';
        }

        this.updateScore();
        this.toggleButtons(false);
    }

    updateScore() {
        this.scoreElement.textContent = `Правильных ответов: ${this.score} из ${this.total}`;
    }

    toggleButtons(showCheck = true) {
        if (showCheck) {
            this.checkButton.style.display = 'block';
            this.newTaskButton.style.display = 'none';
        } else {
            this.checkButton.style.display = 'none';
            this.newTaskButton.style.display = 'block';
        }
    }

    generateNewTask() {
        this.answerInput.value = '';
        this.resultElement.textContent = '';
        this.resultElement.className = 'arithmetic__result';

        this.toggleButtons(true);

        this.generateTask();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ArithmeticGame();
});