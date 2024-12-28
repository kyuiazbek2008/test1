// task 1
// Создайте переменную num передайте в него число 123 используя циклы вывести пирамиду
// let num = 123;
// let newnum = 0;
// for (let i = 1; i <= 3; i++) {
//   newnum += num;
//   console.log(newnum);
// }

// вывод:
// 1
// 12
// 123

// task 2
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// let str = "";
// for (let i = 20; i < 27; i++) {
//   str += "#";
//   console.log(str);
// }
// task 3
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ],

// let arr = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].age > 18) {
//     console.log(`'Hello,
// // ${arr[i].name}, the grand sale has begun,prices are reduced by 20%!`);
//   }
// }

// задача: реализовать рассылку сообщений типа: 'Hello,
// [Здесь должно быть имя клиента], the grand sale has begun,
// prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет

// task 4
// Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}],
//  задача, отфильтровать массив, оставив только строки и числа
// let arr = [
//   1,
//   10,
//   true,
//   "hello",
//   "JS",
//   null,
//   false,
//   0,
//   { title: "Samsung", price: 1000 },
// ];

// task 5
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
// вывести в консоль символы у которых четный индекс
// let str = "Hello, I'm Jack. I'm 25 years old and I Frontend developer!";

// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     console.log(str[i]);
//   }
// }

// task 6
// Дан многомерный массив состоящий из строк:
// const names = [
//   [
//     ['Helen', 'Tom'],
//     ['Jack', 'Peter']
//   ],
//   [
//     ['Jessica', 'Bob'],
//     ['Jimm', 'John']
//   ],
//   [
//     ['Alexa', 'Jessy'],
//     ['David', 'Paul']
//   ]
// ], задача: вывести в консоль только те имена, длинна которых больше 4-х символов
let names = [
  [
    ["Helen", "Tom"],
    ["Jack", "Peter"],
  ],
  [
    ["Jessica", "Bob"],
    ["Jimm", "John"],
  ],
  [
    ["Alexa", "Jessy"],
    ["David", "Paul"],
  ],
];
for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < names[i].length; j++) {
    if (names[i][j] === 4) {
      console.log(names);
    }
  }
}
// task 7
// Проверьте все ли элементы в массиве number
// [1,2,3,4,5] --> true
// [1,"2","3",4,5] --> false

// task 8
// найдите разницу в возрасте между самого старшего и самого младшего в семье
// дан массив с возрастами, нужно возвращать новый массив
// [возраст старшего,возраст младшего,разница]
// [12,74,44,28,59] --> [74,12,62]

// task 9
// Напишите цикл, который за 7 вызовов console.log выводит такой ромбик:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

// task 10
// Вам дан целое число n и строку str и возвращает строку, повторяющуюся ровно n раз.

// let n = 3
// let str "hello"
// вывод:
// "hellohellohello"

// task 11
// Вам дан целое число n и вывести следующий результат
// let n = 10
// 1-2-3-4-5-6-7-8-9-10

// task 12
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for

// task 13
// Найдите самый длинный элемент массива и выведите в консоль
// "Hello my name is John"

// task 14
// Так же найдите самый короткий элемент этого же массива
