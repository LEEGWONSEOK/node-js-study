// 1번 문제

// 수도코드
// 문자 + 넘버 
// S 3 - 6
// N 0 - 6



function solution(registered_list, new_id) {
  let answer = '';
  // 같은 값이 있는지 없는지 체크!
  const listS = [];
  const listN = [];
  let newIdS = new_id.split(/[0-9]/)[0];
  let newIdN = new_id.split(/[a-z]/);
  newIdN = parseInt(newIdN[newIdN.length - 1]);
  console.log(newIdS, newIdN);

  for (item of registered_list) {
    let itemS = item.split(/[0-9]/);
    let itemN = item.split(/[a-z]/);
    itemN = parseInt(itemN[itemN.length - 1]);
    if (isNaN(itemN)) itemN = 0;
    console.log(itemN);
    listN.push(itemN);
    listS.push(itemS[0]);
    console.log(listN, listS);
  }
  let check = []
  for (let i = 0; i < listS.length - 1; i++) {
    if (listS[i] !== newIdS) {  // 없다면?
      console.log('문자 X 숫자 X');
      check.push(0);
    } else {    // 있다면?
      if (listN[i] !== newIdN) { // 숫자값만 다르다면?
        console.log('문자 O 숫자 X');
        check.push(1);
      } else {  // 숫자값도 같다면?
        console.log('문자 O 숫자 O');
        check.push(2);
      }
    }
  }

  
  
  for (item of check) {
    if (item !== 2) {
      answer = new_id;
    }  
  }
  return answer;
}

console.log(solution(["card", "ace13", "ace16", "banker", "ace17", "ace14"], "ace15"));



// 2번 문제


// 3번 문제


// 4번 문제