
function calculateBill(){

    let totalAmount = document.querySelector('#amount').value ;
    let people = document.querySelector('#people').value ;
    let costOfEach = Math.floor(totalAmount/people) ;
    let shareOfEachPerson = document.querySelector('#cost').value = costOfEach ;
    
}