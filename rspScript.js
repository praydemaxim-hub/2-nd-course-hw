let userScore = 0;
let computerScore = 0;

const choices = ['камень', 'ножницы', 'бумага'];
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'ничья';
  }

  if (
    (userChoice === 'камень' && computerChoice === 'ножницы') ||
    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
    (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    return 'победа';
  }

  return 'поражение';
}

function updateScore(result) {
  if (result === 'победа') {
    userScore++;
  } else if (result === 'поражение') {
    computerScore++;
  }
  scoreElement.textContent = `Счёт: ${userScore}‑${computerScore}`;
}

// Обработчик кликов по кнопкам выбора
document.querySelectorAll('.rsp-game__choice').forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    let resultText = `Вы выбрали: ${userChoice}. Компьютер выбрал: ${computerChoice}. `;

    if (result === 'ничья') {
      resultText += 'Ничья!';
      resultElement.className = 'rsp-game__result draw';
    } else if (result === 'победа') {
      resultText += 'Вы победили!';
      resultElement.className = 'rsp-game__result win';
    } else {
      resultText += 'Вы проиграли!';
      resultElement.className = 'rsp-game__result lose';
    }

    // Выводим результат
    resultElement.textContent = resultText;

    // Обновляем счёт
    updateScore(result);
  });
});

// Функция сброса игры
function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateScore(); // Обновляем отображение счёта
  resultElement.textContent = ''; // Очищаем поле результата
  resultElement.className = 'rsp-game__result'; // Сбрасываем стили результата
}

// Добавляем обработчик для кнопки сброса
document.getElementById('resetBtn').addEventListener('click', resetGame);