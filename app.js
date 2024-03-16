"use strict";
const num1Ele = document.getElementById('num1');
const num2Ele = document.getElementById('num2');
const buttonEle = document.querySelector('button');
const numRes = [];
const textRes = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return `${num1} ${num2}`;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonEle.addEventListener('click', () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const result = add(+num1, +num2);
    numRes.push(result);
    const stringResult = add(num1, num2);
    textRes.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numRes, textRes);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('It Worked');
    }, 1000);
});
myPromise.then(res => {
    console.log(res.split('W'));
});
