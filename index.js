const button = document.getElementById('a');
const colors = ['lightblue', 'green', 'yellow', 'blue', 'purple','violet','red']
const textElement = document.getElementById('a');
let currentIndex = 0;
    button.addEventListener('mouseenter', () => {

    textElement.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});
const buttons = document.getElementById('b');
const color = ['lightblue', 'green', 'yellow', 'blue', 'purple','violet','red']
const textElements = document.getElementById('b');
let currentIndexs = 0;
    buttons.addEventListener('mouseenter', () => {

    textElements.style.color = color[currentIndexs];
    currentIndexs = (currentIndexs + 1) % color.length;
});
