const resultOne = document.getElementById('result-1');
const resultTwo = document.getElementById('result-2');
const resultThree = document.getElementById('result-3');
const resultFour = document.getElementById('result-4');
const resultFive = document.getElementById('result-5');
const resultSix = document.getElementById('result-6');
const resultSeven = document.getElementById('result-7');

//Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. 
//Для генерации случайных оценок, используйте функцию Math.random().
const grades = Array.from(
    {
      length: 12,
    },
    () => Math.floor(Math.random() * 100),
  );
  console.log(grades);

resultOne.textContent = grades;

  // Рассчитайте и выведите средний балл студентов, используя методы массивов.

  function getAverage(grades) {
    let sum = 0;
   
    for(let i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
   
    return sum / grades.length;
  }

console.log(getAverage(grades));
resultTwo.textContent = getAverage(grades);

//Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxValue = Math.max(...grades);
console.log(maxValue);

resultThree.textContent = maxValue;

// Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.

const minValue = Math.min(...grades);
console.log(minValue);

resultFour.textContent = minValue;

// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
//Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.

const positiveGrades = grades.filter(function(grade) {
    return grade >= 60;
  });
console.log(positiveGrades.length);

resultFive.textContent = positiveGrades.length;

const negativeGrades = grades.filter(function(grade) {
    return grade < 60;
  });
console.log(negativeGrades.length);
resultSix.textContent = negativeGrades.length;

// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E
/* - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
- Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
- Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
- Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
- Если оценка ниже 20, преобразуйте её в "E" */
function changeGradesToLetters(grades){
    const lettersArray = [];
    grades.forEach(value => {
        if (80 <= value && value <= 100){
            lettersArray.push('A');
        }
        else if (60 <= value && value <= 79){
            lettersArray.push('B');
        }
        else if (40 <= value && value <= 59){
            lettersArray.push('C');
        }
        else if (20 <= value && value <= 39){
            lettersArray.push('D');
        }
        else {
            lettersArray.push('E');
        }
    });
    return lettersArray;
}

resultSeven.textContent = changeGradesToLetters(grades);
