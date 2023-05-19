/* You are #uilding a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changesQ
 */




function Capitalize(){
let firstName = document.getElementById('firstName').value;
let lowerfirstName = firstName.toLowerCase();
let secondName = document.getElementById('secondName').value;
let lowersecondName= secondName.toLowerCase();
let fullName = document.getElementById('fullName');
let first= lowerfirstName.charAt(0);
let second = lowersecondName.charAt(0);
let Name = first.toUpperCase() + lowerfirstName.slice(1) +" " + second.toUpperCase() + lowersecondName.slice(1);
fullName.innerText = Name ;
}





















































/* let fname = "omkesh "


function capitalizeFirstLetter(fname){
    
    const name = name.charAt(0).toUpperCase() + name.slice(1);
    return name;

}

console.log(capitalizeFirstLetter(fname)); */