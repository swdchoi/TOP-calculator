const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const point = document.getElementById(".");
const equal = document.getElementById("=");

const output = document.getElementById("output");
const clear = document.getElementById("clear");
const back = document.getElementById("back");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const rules = [plus, minus, multiply, divide];
const arrNums = [zero, one, two, three, four, five, six, seven, eight, nine, point];
let firstNum = true;

let numStoreOne = [];
let ruleUse;
let numStoreTwo = [];

const pushNumber = (num) => {

 if(num == 10 && firstNum === true) {
    numStoreOne.push("0.");
    output.innerHTML = numStoreOne.toString().replace(/,/g, "");
    } else if (num == 10) {
numStoreOne.push(".");
output.innerHTML = numStoreOne.toString().replace(/,/g, "");
}
    
if(firstNum === true) {
numStoreOne.push(num);
output.innerHTML = numStoreOne.toString().replace(/,/g, "");
} else if (firstNum === false) {
numStoreTwo.push(num);
output.innerHTML = numStoreTwo.toString().replace(/,/g, "");
}
}

const rulesPress = (rule) => {
if (firstNum == false) {
calculate();
ruleUse = rules[rule].innerText;
} 
else {
ruleUse = rules[rule].innerText;
output.innerHTML = `${rules[rule].innerText}`;
firstNum = false;
}
}

const calculate = () => {
if (firstNum == true) {
    alert("make full equation my guy");
} if (Number(numStoreTwo.toString().replace(/,/g, "") == 0)) {
    return
}
else {
    if(ruleUse == "+") {
    const answer = Number(numStoreOne.toString().replace(/,/g, ""))+Number(numStoreTwo.toString().replace(/,/g, ""));
    output.innerHTML = answer;
    numStoreOne = [answer];
    numStoreTwo = [];
    } else if (ruleUse == "-") {
    const answer = Number(numStoreOne.toString().replace(/,/g, ""))-Number(numStoreTwo.toString().replace(/,/g, ""))
    output.innerHTML = answer;
    numStoreOne = [answer];
    numStoreTwo = [];
    } else if (ruleUse == "x") {
    const answer = Number(numStoreOne.toString().replace(/,/g, ""))*Number(numStoreTwo.toString().replace(/,/g, ""))
    console.log(`${Number(numStoreOne.toString().replace(/,/g, ""))}, ${Number(numStoreTwo.toString().replace(/,/g, ""))}`)
    output.innerHTML = answer;
    numStoreOne = [answer];
    numStoreTwo = [];
    } else if (ruleUse == "%") {
    const answer = Number(numStoreOne.toString().replace(/,/g, ""))/Number(numStoreTwo.toString().replace(/,/g, ""))
    console.log(`${Number(numStoreOne.toString().replace(/,/g, ""))}, ${Number(numStoreTwo.toString().replace(/,/g, ""))}`)
    output.innerHTML = answer;
    numStoreOne = [answer];
    numStoreTwo = [];
    }
    }
}

const onload = () => {
for(let i = 0; i <= arrNums.length -1; i++) {
    arrNums[i].addEventListener("click", () => pushNumber(i));
}

for(let i = 0; i <= rules.length -1; i++) {
    rules[i].addEventListener("click", () => rulesPress(i));
}
}

const clearing = () =>{
     firstNum = true;
     output.innerHTML = 0;
     numStoreOne = [];
     ruleUse;
     numStoreTwo = [];
}

const backCondition = () => {
    if(numStoreOne[0] == "0") {
        numStoreOne = [0]
        output.innerHTML = numStoreOne.toString().replace(/,/g, "");
    } else if (numStoreTwo[0] == "0") {
        numStoreTwo = [0]
        output.innerHTML = numStoreTwo.toString().replace(/,/g, "");
    } else {
        backOne();
    }
}

const backOne = () =>{
if(firstNum == true) {
    numStoreOne.pop();
    output.innerHTML = numStoreOne.toString().replace(/,/g, "");
    }
    else if (firstNum == false) {
    numStoreTwo.pop();
    output.innerHTML = numStoreTwo.toString().replace(/,/g, "");
    }
}

clear.addEventListener("click", () => {clearing()});
equal.addEventListener("click", () => {calculate()});
back.addEventListener("click", () => {backCondition()});
document.addEventListener("DOMContentLoaded", () => {onload()});
document.addEventListener("keydown", (e) => {
    if(0 <= e.key && e.key <= 9){
        pushNumber(e.key);}
     else if(e.key == ".") {
        pushNumber(10);
     } else if (e.key == "+"){
        rulesPress(0)
     } else if (e.key == "-") {
        rulesPress(1)
      } else if (e.key == "*"){
        rulesPress(2) 
      } else if (e.key == "/") {
        rulesPress(3)
      } else if (e.key == "Enter"){
        calculate();
      } else if (e.key == "Backspace") {
        backCondition();
      }
    })
