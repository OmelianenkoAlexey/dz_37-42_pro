// ! ДЗ 37. Голосування

// Створити програму для відображення результатів голосування.З наступними умовами:

// Як варіанти відповіді - смайлики.За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок,
// під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const firstSmile = document.querySelector(".firstSmile");
const secondSmile = document.querySelector(".secondSmile");
const thirdSmile = document.querySelector(".thirdSmile");
const fourSmile = document.querySelector(".fourSmile");
const fiveSmile = document.querySelector(".fiveSmile");

const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");
const thirdNumber = document.querySelector(".thirdNumber");
const fourNumber = document.querySelector(".fourNumber");
const fiveNumber = document.querySelector(".fiveNumber");

let firstBall = 25;
let secondBall = 15;
let thirdBall = 10;
let fourBall = 15;
let fiveBall = 25;

firstNumber.innerText = `${firstBall}`;
secondNumber.innerText = `${secondBall}`;
thirdNumber.innerText = `${thirdBall}`;
fourNumber.innerText = `${fourBall}`;
fiveNumber.innerText = `${fiveBall}`;

firstSmile.addEventListener("click", e => {
    firstBall += 1;
    firstNumber.innerText = `${firstBall}`;
});

secondSmile.addEventListener("click", e => {
    secondBall += 1;
    secondNumber.innerText = `${secondBall}`;
});

thirdSmile.addEventListener("click", e => {
    thirdBall += 1;
    thirdNumber.innerText = `${thirdBall}`;
});

fourSmile.addEventListener("click", e => {
    fourBall += 1;
    fourNumber.innerText = `${fourBall}`;
});

fiveSmile.addEventListener("click", e => {
    fiveBall += 1;
    fiveNumber.innerText = `${fiveBall}`;
});


// ! ДЗ 38. Реалізувати подобу інтернет - магазину.

//     Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).


// ! ДЗ 39. Слайдер базовий

// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє.
// При досягненні останнього зображення - ховати кнопку Next.Аналогічно з першим зображенням і кнопкою Prev.

// ! ДЗ 40. generateList

// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел(наприклад[1, 2, 3]) і генерує список з елементів:

// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>

// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>
//         <ul>
//             <li>1.1</li>
//             <li>1.2</li>
//             <li>1.3</li>
//         </ul>
//     </li>
//     <li>3</li>
// </ul>


// ! ДЗ 41. Модифікувати програму інтернет - магазин

// Робимо на підставі минулого дз.


// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто(вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку(інформація про товар та про доставку)

// ! ДЗ 42. Форма для реєстрації

// Реалізовуємо форму для реєстрації.

//     Поля:

// Ім'я, Прізвище (Текстові поля)
// Дата народження(Текстове поле)
// Стать(radio)
// Місто(select)
// Адреса(textarea)
// Мови, якими володіє(checkbox)
// ….
// Кнопка “Зберегти”

// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
