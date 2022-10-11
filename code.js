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

// function wait(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('throw error');
//     }, sec * 1000);
//   });
// }

// async function myAsyncFunc() {
//   console.log('1번째 console', new Date());
//   try {
//     await wait(2);
//   } catch (err) {
//     console.log('2번째 console', err);
//   }
//   console.log('3번째 console', new Date());
// }

// const result = myAsyncFunc();

// function factorial1(num) {
//   if (num === 1) return 1;
//   return num * factorial1(num - 1);
// }

// // 반복문(for) 으로 표현
// function factorial2(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log('재귀함수 : ', factorial1(5));
// console.log('반복문 : ', factorial2(5));

function factorialBasic(num) {
  if (num === 1) return 1;
  return num * factorialBasic(num - 1);
}

factorialBasic(3);

// // 꼬리 재귀함수로 해결
// function factorialTail(num, total=1) {
//   if (num === 1) return total;
//   return factorialTail(num - 1, total * num);
// }

// factorialTail(3);

// function factorial(n,partialFactorial=1){
//     if(!n)
//         return partialFactorial;
//     return factorial(n-1,n*partialFactorial)
// }

// factorial(3)

// console.log('일반재귀 : ', factorialBasic(3));
// console.log('꼬리재귀 : ', factorialTail(3));

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// // BFS
// const bfs = (graph, startNode) => {
// 	const visited = [];
// 	let needVisit = [];

// 	needVisit.push(startNode);

// 	while (needVisit.length !== 0) {
// 		const node = needVisit.shift();
// 		if (!visited.includes(node)) {
// 			visited.push(node);
// 			needVisit = [...needVisit, ...graph[node]];
// 		}
// 	}
// 	return visited;
// };

// console.log(bfs(graph, "A"));

// function solution(numbers, target) {
//   let answer = 0;

//   function dfs(index, sum) {
//     if(index === numbers.length) {
//       if(sum === target) {
//         answer += 1;
//       }
//       return;
//     }
//     dfs(index+ 1 , sum + numbers[index]);
//     dfs(index+ 1 , sum - numbers[index]);
//   }
//   dfs(0, 0);
//   return answer;
// }

// maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1]]

// console.log(maps[0].length, maps.length);

// let queue = [];
// console.log(queue);

// queue.push([0, 0])
// console.log(queue);

// let [x, y] = queue.shift();
// console.log(queue);
// console.log(x, y);

// let nx = x + (-1)
// let ny = y + 0

// function selectionSort (arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let minIndex = i;
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[minIndex] > arr[j]) {
// 				minIndex = j;
// 			}
// 		}
// 		if (minIndex !== i) {
// 			let swap = arr[minIndex];
// 			arr[minIndex] = arr[i];
// 			arr[i] = swap;
// 		}
// 		console.log(`${i}회전 : ${arr}`);
// 	}
// 	return console.log(arr);
// }

// const arr1 = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// selectionSort(arr1);

// function insertionSort (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let cur = arr[i];
//     let left = i - 1;
//     while (left >= 0 && arr[left] > cur) {
//       arr[left + 1] = arr[left];
//       arr[left] = cur;
//       cur = arr[left];
//       left--;
//     }
//   }
//   return console.log(arr);
// }

// const arr1 = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// insertionSort(arr1);

// function bubbleSort (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let swap;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//       }
//     }
//     console.log(`${i}회전: ${arr}`);
//     if (!swap) {
//       break;
//     }
//   }
//   return console.log(arr);
// }

// const arr1 = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// bubbleSort(arr1);

// // ff

// 최소 직사각형

// function solution(sizes) {
//   let answer = 0;
//   const first = [];
//   const second = [];

//   for (let i = 0; i < sizes.length; i++) {
//     if (sizes[i][0] >= sizes[i][1]) {
//       sizes[i] = sizes[i].reverse();
//     }
//     first.push(sizes[i][0]);
//     second.push(sizes[i][1]);
//   }
//   answer = Math.max(...first) * Math.max(...second);

//   return answer;
// }

// solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]);

// 소수찾기

// function solution(numbers) {
//   let answer = 0;
//   const numList = numbers.split("");
//   const numAll = [];
//   const numListLength = numList.length
//   console.log(numList);

// 길이에 따라
//   function searchAll(numListLength) {
//     for (let i = 0; i < numListLength; i++) {
//       num[i]
//     }
//   }

//   for (let i = 0; i < numList.length; i++) {
//     numAll.push(numList[i]);
//     if (i === numList.length - 1) {
//       numAll.push(numList[i] + numList[0]);
//       numAll.push(numList[0] + numList[i]);
//     } else {
//       numAll.push(numList[i] + numList[i + 1]);
//       numAll.push(numList[i + 1] + numList[i]);
//     }
//     for (let j = )
//   }
//   console.log(numAll);
//   const toNum = numAll.map(Number);
//   const result = [...new Set(toNum)];
//   console.log(result);

//   return answer;
// }

// function solution(numbers) {
//   let answer = [];
//   let nums = numbers.split('');

//   console.log(nums);
//   // 소수 판별
//   const isPrimeNum = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i * i <= num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   // 순열 만들기
//   const getPermutation = (arr, fixed) => {
//     if (arr.length >= 1) {
//       for (let i = 0; i < arr.length; i++) {
//         const newNum = fixed + arr[i];
//         const copyArr = [...arr];
//         console.log('newNum:', newNum);
//         console.log('copyArr:', copyArr);
//         copyArr.splice(i, 1);
//         console.log('copyArr:', copyArr);
//         if (!answer.includes(+newNum) && isPrimeNum(+newNum)) {
//           answer.push(+newNum)
//           console.log('+newNum:', +newNum);
//         }
//         getPermutation(copyArr, newNum);
//       }
//     }
//   }

//   getPermutation(nums, '');
//   return answer.length;
// }

// console.log(solution("17"));
//console.log(solution("011"));

// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//   const pivot = [arr[0]];
//   const start = [];
//   const end = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       start.push(arr[i]);
//     } else if (arr[i] > pivot) {
//       end.push(arr[i]);
//     } else {
//       pivot.push[arr[i]];
//     }
//   }
//   console.log('pivot : ', pivot);
//   console.log('start : ', start);
//   console.log('end : ', end);
//   return quickSort(start).concat(pivot, quickSort(end));
// }

// const sorted = quickSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]);

// console.log(sorted);

// function movingStuff(stuff, limit) {

//   let count = 0;
//   let sortedStuff = stuff.sort((a, b) => a - b)
//   console.log('sortedStuff : ', sortedStuff);
//   while (sortedStuff.length !==0) {
//     if (sortedStuff[0] + sortedStuff[sortedStuff.length-1] <= limit) {
//       count++
//       sortedStuff.shift();
//       sortedStuff.pop();
//       console.log('sortedStuff : ', sortedStuff);
//     } else {
//       count++
//       sortedStuff.pop();
//       console.log('sortedStuff : ', sortedStuff);
//     }
//   }
//   return console.log(count);
// }

// movingStuff([70, 50, 80, 50], 100);

//

// function partTimeJob(k) {
//   let count = 0;
//   const arr = [500, 100, 50, 10, 5, 1];
//   for (item of arr) {
//     count = count + Math.floor(k / item);
//     k = k - item * Math.floor(k / item);
//   }
//   return count;
// }

// console.log(partTimeJob(1230));

// function quickSort2(arr) {
//   if (arr.length <= 1) return arr;
//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }

//   const lSorted = quickSort2(left);
//   const rSorted = quickSort2(right);
//   return [...lSorted, pivot, ...rSorted];
// }

// 폰켓몬
// function solution(nums) {
//   let answer = 0;
//   const set = new Set(nums);  // 중복 제거
//   const uniqueNums = [...set];
//   const uniqueNumsLength = uniqueNums.length;
//   const selectNum = nums.length / 2;  // 선택 개수

//   console.log('uniqueNumsLength : ', uniqueNumsLength);
//   console.log('uniqueNums : ', uniqueNums);
//   console.log('selectNum : ', selectNum);

//   if (uniqueNumsLength >= selectNum) {
//     return selectNum;
//   }
//   return uniqueNumsLength;
//   // 3항 연산자
// }

// console.log(solution([3, 1, 2, 3]));  // 2
// console.log(solution([3, 3, 3, 2, 2, 4]));  // 3
// console.log(solution([3, 3, 3, 2, 2, 2]));  // 2

// // // 위장
// function solution(clothes) {
//   let answer = 1;   // 곱해야 되기 때문에 0 -> 1로 변경
//   const obj = {};   // 빈 object 생성
//   for (let i = 0; i < clothes.length; i++) {
//     obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1; // 반복문 돌리면서 개수 추가
//     console.log(obj);
//   }

//   for(let key in obj){
//     answer *= obj[key];
//     console.log(answer);
//   }

//   return answer - 1;
// }

// console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));  // 5

// new Promise((resolve, reject) => {
//   console.log("Inside Promise");
//   reject(new Error("First Reject"));
//   resolve("First Resolve");
// })
//   .then((value) => {
//     console.log("Inside then");
//     console.log("value :", value);
//   })
//   .catch((err) => {
//     console.log("error :", err);
//   });

// new Promise((resolve, reject) => {
//   console.log("Inside Promise");
//   reject(new Error("First Reject"));
//   resolve("First Resolve");
// })
//   .then((value) => {
//     console.log("Inside then");
//     console.log("value :", value);
//   })
//   .catch((err) => {
//     console.log("error :", err);
//   });

new Promise((resolve, reject) => {
  console.log("Before timeout");
  setTimeout(() => {
    resolve(Math.random());
    console.log("After resolve");
  }, 3000);
  console.log("언제 실행될까요?");
})
  .then((value) => {
    console.log("value :", value);
  })
  .then(() => {
    console.log("then2");
  });
