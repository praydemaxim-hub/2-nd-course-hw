function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function updateBackgroundColor() {
    const randomColor = getRandomColor();
    const miniGameSection = document.querySelector('.mini-game');

    miniGameSection.style.backgroundColor = randomColor;

    document.getElementById('currentColorInfo').textContent = `Текущий цвет: ${randomColor}`;
}

const colorButton = document.getElementById('changeColorBtn');

colorButton.addEventListener('click', updateBackgroundColor);

window.addEventListener('load', function() {
    updateBackgroundColor();
});