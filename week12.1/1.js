/*Вам необходимо выполнить несколько операций с этим текстом:

Выведите в консоль количество символов в тексте.

Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.

Удалите все пробелы в переменной result и сохраните результат в переменную substring.

Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.

Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.

Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.

Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.

Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.

Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.

Выведите значения всех полученных переменных на экран.*/

let result1 = document.querySelector('.result1');
let result2 = document.querySelector('.result2');
let result3 = document.querySelector('.result3');
let result4 = document.querySelector('.result4');
let result5 = document.querySelector('.result5');
let result6 = document.querySelector('.result6');
let result7 = document.querySelector('.result7');
let result8 = document.querySelector('.result8');
let result9 = document.querySelector('.result9');

let text = document.getElementById("text_1");
let result = 'у лукоморья клён зелёный;\n златая цепь на клён том;\n и днём и ночью кот учёный;\n всё ходит по цепи кругом;\n идёт направо — песнь заводит;\n налево — сказку говорит;\n там чудеса: там леший бродит;\n русалка на ветвях сидит;\n там на неведомых дорожках;\n следы невиданных зверей;\n избушка там на курьих ножках;\n стоит без окон, без дверей;\n там лес и дол видений полны;\n там о заре прихлынут волны;\n на брег песчаный и пустой;\n и тридцать витязей прекрасных;\n чредой из вод выходят ясных;\n и с ними дядька их морской;\n там королевич мимоходом;\n пленяет грозного царя;\n там в облаках перед народом;\n через леса, через моря;\n колдун несёт богатыря;\n в темнице там царевна тужит;\n а бурый волк ей верно служит;\n там ступа с бабою ягой;\n идёт, бредёт сама собой;\n там царь кащей над златом чахнет;\n там русский дух… там русью пахнет!;\n и там я был, и мёд я пил;\n у моря видел клён зелёный;\n под ним сидел, и кот учёный;\n свои мне сказки говорил.'
let substring = result.replace(/ /g, '');
let newText = result.substring(27, 50);
let replacedText = newText.replace(/клён/g, 'дубе');
let replacedText2 = result.toUpperCase();
let replacedText3 = result.replace(/клён/g, "дуб");
let index = result.indexOf('моря');
let modifiedText = replacedText.replace(replacedText[0], replacedText[0].toUpperCase());

result1.innerText = '1. Количество символов в тексте: \n' + text.textContent.length;
result2.innerText = '2. Текст с переносами строк: \n' + result;
result3.innerText = '3. Текст с удалёнными пробелами: \n' + substring;
result4.innerText = '4. Извлечение подстроки: \n' + newText;
result5.innerText = '5. Замена "клён" на "дубе": \n' + replacedText;
result6.innerText = '6. Строка result в верхнем регистре: \n' + replacedText2;
result7.innerText = '7. Замена "клён" на "дуб" (все вхождения) в переменной result: \n' + replacedText3;
result8.innerText = '8. Индекс первого вхождения "моря": \n' + index;
result9.innerText = '9. Строка с измененной первой буквой: \n ' + modifiedText;

console.log(`1. Количество символов в тексте: ${text.textContent.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: \n ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result:\n ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);