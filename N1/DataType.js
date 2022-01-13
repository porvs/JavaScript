const name = "Mike"; //문자형 String

const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy.";
const message2 = 'I\'m a boy.'; // \' 를 특수 문자로 인식 

const message3 = `My name is ${name}`; // `` 는 문자열 내부에 변수를 표현해줄때 사용
console.log(message3);

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4);

const age = 30; // 숫자형 Number
const PI = 3.14;

console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기 
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 4); // % 나머지

const y = name/2;
console.log(y) // NaN = Not a number


// Boolean
const a = true; // 참
const b = false; // 거짓

console.log(name == 'Mike');
console.log(age > 40);


// null 과 undefined @null: 존재x  @undefined: 값 할당x
let unknown;
console.log(unknown);
let user = null;
console.log(user);


// typeof 연산자
console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);
console.log(typeof undefined); 