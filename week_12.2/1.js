// Шаги для выполнения задания:

// 1. Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
// 2. Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
// 3. Используя полученные случайные индексы, извлеки соответствующие символы из alphabet и объедини их в строку, чтобы сформировать случайное слово.
// 4. Выведи полученное случайное слово на экран, чтобы проверить результат.

const alphabet = document.getElementById('alphabet')
const result = document.getElementById('result')
const randomWord = document.getElementById('randomWord');

randomWord.addEventListener('click', function() {
    let letters = alphabet.textContent;
    let index1 = Math.floor(Math.random() * letters.length);
    let index2 = Math.floor(Math.random() * letters.length);
    let index3 = Math.floor(Math.random() * letters.length);
    let index4 = Math.floor(Math.random() * letters.length);
    result.innerText = 'Полученное слово: ' + letters[index1] + letters[index2] + letters[index3] + letters[index4];
})