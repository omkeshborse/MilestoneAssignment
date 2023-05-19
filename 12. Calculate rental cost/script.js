function calculate(){
    let selectOption = document.getElementById('myOption').value ;
    let numberDay = document.getElementById('num').value ;
    let totalCost  = document.getElementById('cost') ;
    let classCarONE = "Economy";
    let classCarTwo = "Midsize";
    let classCarThree = "Luxury";
    if(type == classCarONE){
        totalCost.value = 4000 * numberDay ;
    }else if(type ==classCarTwo){
        totalCost.value = 10000 * numberDay ; 
    }else if(type == classCarThree){
        totalCost.value = 20000 * numberDay ;
    }

}