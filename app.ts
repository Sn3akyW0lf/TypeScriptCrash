const num1Ele = document.getElementById('num1') as HTMLInputElement;
const num2Ele = document.getElementById('num2') as HTMLInputElement;
const buttonEle = document.querySelector('button')!;

const numRes: Array<number> = [];
const textRes: Array<string> = [];

type NumOrStr = number | string;
type Result = { val: number; timestamp: Date; };

interface ResultObj { 
    val: number; 
    timestamp: Date;
}

function add(num1: NumOrStr, num2: NumOrStr) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return `${num1} ${num2}`;
    }

    return +num1 + +num2;
    
}

function printResult (resultObj: ResultObj) {
    console.log(resultObj.val);
}

buttonEle.addEventListener('click', () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const result = add(+num1, +num2);
    numRes.push(result as number);
    const stringResult = add(num1, num2);
    textRes.push(stringResult as string);

    printResult({ val: result as number, timestamp: new Date() });

    console.log(numRes, textRes);
});


const myPromise = new Promise<string>((res, rej) => {
    setTimeout(() => {
        res('It Worked');
    }, 1000);
});

myPromise.then(res => {
    console.log(res.split('W'));
})