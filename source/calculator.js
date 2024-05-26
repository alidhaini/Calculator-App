// all keys
const digits = document.querySelectorAll('.digit');
//display screen
const display = document.querySelector('.display');

let ans = 0;
let num = '';
let operation = '';
//global variables
// is operation
//ans
//num add digits on the num
//tool when founded, save it in the tool

// when writing new num:
// make ans += num
//new num

function isOperation(op)
    {
        return ['-', '+', 'x', '/'].includes(op);
    }

function isAction(ac)
    {
        return ['del', 'reset', 'ans'].includes(ac);
    }

function handleOperation(op){
    if(num == '' && operation == '') return;
    
    if(num == '' && operation != '') {
        operation  = op;
        return;
    }

    if(operation != '') calculate();

    else ans = parseFloat(num);

    operation = op;
    num = '';

}

function calculate(){
    const currentNum = parseFloat(num);
        switch(operation)
        {
            case '+':
                ans += currentNum;
                break;
            case '-':
                ans -= currentNum;
                break;
            case 'x':
                ans *= currentNum;
                break;
            case '/':
                if (currentNum !== 0){
                    ans /= currentNum;
                }else {
                    alert("Cannot divide by zero");
                    return;
                }
                break;
        }
        operation = '';
}

function doAction(value){
    switch(value){
        case 'del':
                num = num.slice(0, -1);
            break;
        case 'reset':
            ans = 0;
            num = '';
            operation = '';
            break;
        case 'ans':
            if(num)
                calculate();
            num = ans.toString();
            break;
    }
}


digits.forEach(digit => {
    digit.addEventListener('click',() => {
        const value = digit.dataset.value;
        if(isOperation(value)){
           handleOperation(value);
        }
        else if(isAction(value)){
            doAction(value);
        }
        else{
            if(num == '0')
                num = '';
            num += value;
        }
        display.value = num || ans || 0;
    })
})

