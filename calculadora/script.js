const buttons = document.getElementsByTagName("button");
const input = document.getElementById("components");
const output = document.getElementById("result");
let started = false;
let resultArr = [];

function isOperator(c){
    if (c === '*0.01*' || c === '/' || c === '+' || c === '*' || c === '(')
        return true;
    return false;
};

function whichParenteses(){
    let count = 0;
    for(let i = 0; i < resultArr.length; i++){
        if (resultArr[i] === '(')
            count++;
        else if (resultArr[i] === ')')
            count--;
    }
    
    if (count === 0 || resultArr[resultArr.length - 1] === '(' || isOperator(resultArr[resultArr.length - 1]))
        return '(';
    else    
        return ')';
};

function isValid(){
    let count = 0;
    for(let i = 0; i < resultArr.length; i++){
        if (resultArr[i] === '(')
            count++;
        else if (resultArr[i] === ')')
            count--;
    }
    if (count === 0)
        return true;
    return false;
}

function appendComponent(component) {
    const type = component.getAttribute("data-type");
    if (type === "number") {
        if (!started){
            input.innerHTML = "";
            resultArr = [];
            output.innerHTML = " ";
            started = true;
        }
        const text = document.createTextNode(component.innerHTML);
        input.appendChild(text);
        if (component.innerHTML === ',')
            resultArr.push('.');
        else
            resultArr.push(component.innerHTML);
        if (isValid())
            output.innerHTML = eval(resultArr.join(''));
    }
    else if (type === "operator" && resultArr.length != 0 && !isOperator(resultArr[resultArr.length - 1]) ){
        const text = document.createTextNode(component.innerHTML);
        input.appendChild(text);
        if (component.innerHTML === '%')
            resultArr.push("*0.01*");
        else
            resultArr.push(component.innerHTML);
    }
    else if (type === "clear"){
        input.innerHTML = "";
            resultArr = [];
            output.innerHTML = " ";
    }
    else if (type === "delete"){
        input.innerHTML = input.innerHTML.slice(0, -1);
        resultArr.pop();
        if (input.innerHTML === '')
            output.innerHTML = " ";
    }
    else if (type === "parenteses"){
        const text = document.createTextNode(whichParenteses());
        input.appendChild(text);
        resultArr.push(whichParenteses());
        if (isValid())
            output.innerHTML = eval(resultArr.join(''));
    }
    else if (type === "special" && resultArr[resultArr.length - 1] != '-'){
        if (!started){
            input.innerHTML = "";
            resultArr = [];
            output.innerHTML = " ";
            started = true;
        }
        const text = document.createTextNode(component.innerHTML);
        input.appendChild(text);
        resultArr.push(component.innerHTML);
    }
    else if (type == "finished" && isValid() && resultArr.length != 0){
        input.innerHTML = eval(resultArr.join(''));
        output.innerHTML = "";
        resultArr = [evalWithPercentage(resultArr.join(''))];
    }
};

function addEventListeners() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            appendComponent(buttons[i]);
        });
    }
};

addEventListeners();