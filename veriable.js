// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'Hayeong';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

{
age = 4;
var age;
}
console.log(age);

// 3.Constans
// favor immutable data type always for a few reason: 값 할당후 다시는 변경 x
// - security
// - thread safety 
// - reduce human mistakes 코드 변경, 다른개발자가 코드를 변경할때 실수를 줄여줌

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, underfiedn, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1 //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 /0;
const nAn ='not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over(-2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value ${helloBob}, type: ${typeof helloBob}`);
