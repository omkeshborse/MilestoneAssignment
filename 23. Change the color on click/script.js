const body = document.querySelector("body");
const bgColor = [ "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "A" , "B" , "C" , "D" , "E" , "F" ,];
const textColor = document.querySelector("#text");
function changeColor(){
let color = "#";
     for (let index = 0; index < 6 ; index++) {
            let num = Math.random();
            let i = num * bgColor.length;
            color = color + bgColor[Math.floor(i)];
            
       }
       body.style.backgroundColor= color ; 
}
function changeTextColor(){
    
    let color = "#";
     for (let index = 0; index < 6 ; index++) {
            let num = Math.random();
            let i = num * bgColor.length;
            color = color + bgColor[Math.floor(i)];
            
       }
       textColor.style.color= color ; 
}

