document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const turnBtn = document.getElementById('turnBtn');
    const clearBtn = document.getElementById('clearBtn');
    const result = document.getElementById('result');

    function reverseText(text) {
        return text.split('').reverse().join('');
    }

    turnBtn.addEventListener('click', function() {
        const inputText = textInput.value;

        if (inputText.trim() === '') {
            result.textContent = 'Пожалуйста, введите текст!';
            result.style.color = '#F44336';
        } else {
            const reversedText = reverseText(inputText);
            result.textContent = reversedText;
            result.style.color = '#4CAF50';
        }
    });

    clearBtn.addEventListener('click', function() {
        textInput.value = '';
        result.textContent = 'Результат появится здесь';
        result.style.color = '#fff';
    });

    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            turnBtn.click();
        }
    });
});