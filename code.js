// function outer() {
//   var a = 'A';
//   var b = 'B';
//   function inner() {
//     var a = 'AA';
//     console.log(b);
//   }
//   return inner;
// }

// var outerFunc = outer();
// outerFunc();



// const country = {
//   name: 'korea',    // 객체의 프로퍼티
//   population: '123',
//   getName: function () {    // 객체의 메서드
//     return this.name;
//   }
// };



// const coffee = [];

// coffee.push({ name: 'americano' });
// coffee.push({ name: 'latte' });

// console.log(coffee);
// console.log(coffee[0]);
// console.log(coffee.length);


// const animal = ['dog', 'cat'];

// let [first, second] = animal;

// console.log(first);
// console.log(second);



// const func = function () {
//   console.log(arguments);
// }

// func(1, 2, 3, 4);



// const func = (...args) => {
//   console.log(args);
// }

// func(1, 2, 3, 4);

// var people = {
//   name: 'gwonseok',
//   say: function () {
//     console.log(this);
//   }
// }

// people.say();

// var sayPeople = people.say;

// sayPeople();

// function func() { };
// console.log(func.prototype);

// func.prototype.name = 'gwonseok';
// console.log(func.prototype);

// function work(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(new Date().toISOString());
//     }, sec * 1000);
//   });
// }

// work(1).then(result => {
//   console.log('첫번째 작업', result);
//   return work(1);
// }).then(result => {
//   console.log('두번째 작업', result);
// });


// function work(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(new Date().toISOString());
//     }, sec * 1000);
//   });
// }

// function justFunc() {
//   return 'just function';
// }

// async function asyncFunc() {
//   return 'async function';
// }

// async function asyncFunc2() {
//   return await 'async2 function';
// }

// console.log('justFunc', justFunc());
// console.log('asyncFunc', asyncFunc());
// console.log('asyncFunc2', asyncFunc2());
// console.log('work', work());


// function work(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('work function');
//     }, sec * 1000);
//   });
// }

// async function asyncFunc() {
//   const result = await work(3);
//   console.log(result);
//   return 'async function';
// }

// asyncFunc().then(result => {
//   console.log(result);
// })


// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('type of arguments must be number type');
//     //throw 'type of arguments must be number type';
//   }
//   console.log(a + b);
// }

// sum(1, 4);
// sum(1, 'a');


// function wait(sec) {
//   return new Promise((resolve, resject) => {
//     setTimeout(() => {
//       resject('error');
//     }, sec * 1000);
//   });
// }

// wait(3).catch(err => {
//   console.log('1st catch', err)
// })

// wait(3).catch(err => {
//   console.log('1st catch', err);
// }).catch(err => {
//   console.log('2nd catch', err);
// });

// async function myAsyncFunc() {
//   return 'done';
// }

// const result = myAsyncFunc();
// console.log(result);


// async function myAsyncFunc() {
//   throw 'myAsyncFunc error';
// }

// function myPromiseFunc() {
//   return new Promise((resolve, reject) => {
//     reject('myPromiseFunc Error');
//   });
// }

// const result = myAsyncFunc().catch(e => console.log(e));
// const result2 = myPromiseFunc().catch(e => console.log(e));


function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('throw error');
    }, sec * 1000);
  });
}

async function myAsyncFunc() {
  console.log('1번째 console', new Date());
  try {
    await wait(2);
  } catch (err) {
    console.log('2번째 console', err);
  }
  console.log('3번째 console', new Date());
}

const result = myAsyncFunc();

