const button = document.getElementById('clickButton');
const message = document.getElementById('message');
let clickCount = 0;
const targetClicks = 990;

button.addEventListener('click', () => {
    clickCount++;
    button.textContent = clickCount;

    if (clickCount === targetClicks) {
        message.style.display = 'block';
    }

    moveButton();
    changeBackgroundColor();
});

function moveButton() {
    const buttonRect = button.getBoundingClientRect();

    // Размеры экрана устройства
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Центр экрана
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;

    // Размер области вокруг центра
    const offset = 100; // Уменьшите или увеличьте, чтобы изменить размер области

    // Ограничиваем область перемещения кнопки, чтобы она была примерно в центре
    const minX = centerX - offset;
    const maxX = centerX + offset;
    const minY = centerY - offset;
    const maxY = centerY + offset;

    // Генерируем случайные координаты в пределах области
    const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
    const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

    // Убедитесь, что кнопка не выходит за пределы экрана
    const finalX = Math.max(0, Math.min(randomX, screenWidth - buttonRect.width));
    const finalY = Math.max(0, Math.min(randomY, screenHeight - buttonRect.height));

    button.style.position = 'absolute';
    button.style.left = `${finalX}px`;
    button.style.top = `${finalY}px`;
}

function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}

// Initial move and color change
moveButton();
changeBackgroundColor();