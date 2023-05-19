/* A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marksQ */

function maximum(){
    let marks=[20,25,89,45,7] ;
    let maxMarks = marks[0];
    for (let index = 0; index < marks.length; index++) {
        
        if (marks[index]>maxMarks) {

            maxMarks=marks[index];
            
        }
        
    }
    return (maxMarks);
}
console.log(maximum());


