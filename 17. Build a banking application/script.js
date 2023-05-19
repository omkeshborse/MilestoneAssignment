/* 17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal. */

let costumer = [
  {
    firstName: 'omkesh',
    secondName: 'borse',
    balance: 10000,
  },
  {
    firstName: 'vivek',
    secondName: 'borse',
    balance: 220000,
  },
]

let withdrawal = (x) => {

    
    costumer.forEach(element => {
         console.log(element.firstName)
           console.log(element.secondName)
           /* withdrawal amount  */
           console.log(
             'amount in account after withdrawal ' + (element.balance - x) ) ;
    });       
  }

withdrawal(500 ) ; 


let deposite = (x) => {
  costumer.forEach(element=>{
    console.log(element.firstName)
    console.log(element.secondName)
    /* deposite amount  */
    console.log('amount in account after deposite ' + (element.balance + x))
  })
}

deposite(11500) ; 
