/* Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement
to perform the operation on the two numeros
The calculator function should"
1 Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
1 Use a switch statement to determine which operation to perform #ased on the value of the operatorP
1 If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a varia#le called resultP
1 If the operator is not one of the valid operators, log "Invalid operator" to the console */



    
/* 

function swtichCase(){

    let numberOne = document.getElementById('numberOne').value;
        numberOne = Number(numberOne)
    
    let numberTwo = document.getElementById('numberTwo').value;
        numberTwo = Number(numberTwo);
    let result = document.getElementById('result').innerText = "";
      

    let operation = document.getElementById('oprator').value ;
    let re ;    

    
    switch (operation) {
        case "add" :
            re = (numberOne+numberTwo);
            console.log(re);
            result.innerText = re;
            console.log(re);
            break;
    
        case "sub" :
            result.innerText=(numberOne-numberTwo);
            result.innerText = re;
            console.log(re);
            break;
    
        case "mul" :
            result.innerText=(numberOne*numberTwo);
            result.innerText = re;
            console.log(re);
            
            break;
    
        case "div" :
            result.innerText=(numberOne/numberTwo);
            result.innerText = re;
            console.log(re);
            
            break;
    
        default:
            result.value=("invalid opration");
            break;
    }
}

 */

function swtichCase(){

    let numberOne = document.getElementById('numberOne').value;
    numberOne = Number(numberOne)
    
    let numberTwo = document.getElementById('numberTwo').value;
    numberTwo = Number(numberTwo);
    let result = document.getElementById('result');
    
    
    let operation = document.getElementById('oprator').value ;
    let re ;
    
    
    switch (operation) {
    case "add" :
    re = (numberOne+numberTwo);
    console.log(re);
    result.innerText = re;
    console.log(re);
    break;
    
    case "sub" :
    re=(numberOne-numberTwo);
    result.innerText = re;
    console.log(re);
    break;
    
    case "mul" :
    re=(numberOne*numberTwo);
    result.innerText = re;
    console.log(re);

    break;
    
    case "div" :
    re=(numberOne/numberTwo);
    result.innerText = re;
    console.log(re);
    
    break;
    
    case "mod" :
    re=(numberOne%numberTwo);
    result.innerText = re;
    console.log(re);
    
    break;
    
    default:
    result.value=("invalid opration");
    break;
    }
    }
  
  