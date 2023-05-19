/* Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
#ased on the following criteria"
1 If color1 is "red" and color2 is "blue" or vice versa, print "purple".
1 If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
1 If color1 is "blue" and `color2" is "yellow" or vice versa, print "green".
1 If any other combination of colors is input, the program should print "Invalid color com#ination" */


function colorMixer(){

    let inputOne = document.getElementById('colorOne').value;
    let inputTwo= document.getElementById('colorTwo').value;
    let color = document.getElementById('colorOut');

    if (inputOne.length!=0 && inputTwo.length!=0) {
        
    
    switch (inputOne.length!=0 && inputTwo.length!=0) {
        case ((inputOne=="red" && inputTwo=="blue")||(inputOne=="blue" && inputTwo=="red")):
            color.innerText = "purpule";
            color.style.backgroundColor="#A020F0";
            break;
        case ((inputOne=="red" && inputTwo=="yellow")||(inputOne=="yellow" && inputTwo=="red")):
            color.innerText = "orange";
            color.style.backgroundColor= "#FFA500";
            break;
        case ((inputOne=="blue" && inputTwo=="yellow")||(inputOne=="yellow" && inputTwo=="blue")):
            color.innerText = "green";
            color.style.backgroundColor= "#00FF00"
            break;
    
        default:
            color.innerText="invalid input";
            break;
    }
        } else {
            color.innerText="invalid input";
        }

}