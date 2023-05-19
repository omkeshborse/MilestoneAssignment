/* 
    16. Generate a random number
Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
Use a self-invoking arrow function to generate the random number. This program can be used as a component
in various games or applications that require a random number generator. */



let random = document.querySelector('#btn') ;

random.addEventListener('click', generateRandomNo);
function  generateRandomNo(){
    let randomNumber = document.querySelector("#num") ;
    randomNumber.value = Math.floor(Math.random() * 100)
} ;


/*  self-invoking arrow function to generate the random number */

/* ans */
(()=>{
   let randomNumber = Math.floor(Math.random() * 100) 
   console.log(randomNumber) ;
})() ;