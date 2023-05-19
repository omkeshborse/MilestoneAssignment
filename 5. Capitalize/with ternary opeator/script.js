/* 
You are #uilding a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changesQ */






function cap(){
    let fname = document.getElementById('fname').value;
   let lowerFname= fname.toLowerCase();
    let name = document.getElementById('name');

    let x = fname.charAt(0).toLowerCase();

    let capitalize = (fname.charAt(0) == x  ? (fname.charAt(0).toUpperCase() + lowerFname.slice(1)) : (fname.charAt(0) + lowerFname.slice(1)))

    name.innerText = capitalize ;

}


