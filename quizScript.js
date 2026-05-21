const quizQuestions = [
  {
    question: "Какой город является столицей Франции?",
    options: ["Лондон", "Берлин", "Париж", "Мадрид"],
    correct: 2 // Индекс правильного ответа (начинается с 0)
  },
  {
    question: "Сколько планет в Солнечной системе?",
    options: ["7", "8", "9", "10"],
    correct: 1
  },
  {
    question: "Какое животное является самым крупным на Земле?",
    options: ["Слон", "Синий кит", "Жираф", "Носорог"],
    correct: 1
  },
  {
    question: "Какая самая высокая гора в мире?",
    options: ["Килиманджаро", "Эверест", "Эльбрус", "Мак-Кинли"],
    correct: 1
  },
  {
    question: "В каком году человек впервые полетел в космос?",
    options: ["1957", "1961", "1969", "1975"],
    correct: 1
  }
];

// Переменные для отслеживания состояния
let userAnswers = [];
let correctCount = 0;

// Функция для отображения вопросов
function displayQuestions() {
  const container = document.getElementById('questions-container');
  
  quizQuestions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    
    // Текст вопроса
    const questionText = document.createElement('p');
    questionText.className = 'question__text';
    questionText.textContent = `${index + 1}. ${q.question}`;
    
    // Контейнер для вариантов ответов
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    
    q.options.forEach((option, optionIndex) => {
      const optionLabel = document.createElement('label');
      optionLabel.className = 'option';
      
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question-${index}`;
      radio.value = optionIndex;
      
      // Сохраняем выбранный ответ
      radio.addEventListener('change', () => {
        userAnswers[index] = parseInt(radio.value);
      });
      
      const optionText = document.createElement('span');
      optionText.textContent = option;
      
      optionLabel.appendChild(radio);
      optionLabel.appendChild(optionText);
      optionsDiv.appendChild(optionLabel);
    });
    
    questionDiv.appendChild(questionText);
    questionDiv.appendChild(optionsDiv);
    container.appendChild(questionDiv);
  });
}

// Функция для подсчёта правильных ответов
function calculateScore() {
  correctCount = 0;
  
  quizQuestions.forEach((question, index) => {
    // Проверяем, ответил ли пользователь на вопрос
    if (userAnswers[index] !== undefined) {
      // Сравниваем ответ пользователя с правильным
      if (userAnswers[index] === question.correct) {
        correctCount++;
      }
    }
  });
  
  return correctCount;
}

// Функция для отображения результата
function showResult() {
  const resultDiv = document.getElementById('result');
  const totalQuestions = quizQuestions.length;
  const score = calculateScore();
  
  // Очищаем предыдущий результат
  resultDiv.innerHTML = '';
  
  // Формируем текст результата
  let resultText = `Правильных ответов: ${score} из ${totalQuestions}`;
  
  // Добавляем процент выполнения
  const percentage = (score / totalQuestions) * 100;
  resultText += ` (${percentage.toFixed(0)}%)`;
  
  resultDiv.textContent = resultText;
  
  // Добавляем стили в зависимости от результата
  if (score === totalQuestions) {
    resultDiv.className = 'quiz__result correct-result';
    resultDiv.textContent += ' — Отлично! Все ответы верные!';
  } else if (percentage >= 60) {
    resultDiv.className = 'quiz__result correct-result';
    resultDiv.textContent += ' — Хорошо! Вы неплохо справились!';
  } else {
    resultDiv.className = 'quiz__result incorrect-result';
    resultDiv.textContent += ' — Попробуйте ещё раз! Нужно подтянуть знания.';
  }
}

// Функция инициализации викторины
function initQuiz() {
  // Отображаем вопросы
  displayQuestions();
  
  // Добавляем обработчик события для кнопки проверки
  document.getElementById('submit-btn').addEventListener('click', () => {
    // Проверяем, все ли вопросы отвечены
    const allAnswered = userAnswers.length === quizQuestions.length &&
                   userAnswers.every(answer => answer !== undefined);
    
    if (!allAnswered) {
      alert('Пожалуйста, ответьте на все вопросы перед проверкой!');
      return;
    }
    
    // Показываем результат
    showResult();
  });
}

// Запускаем викторину после загрузки страницы
document.addEventListener('DOMContentLoaded', initQuiz);