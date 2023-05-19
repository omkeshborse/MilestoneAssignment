/*  15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers. */

function calculateDiscount() {
    let op = document.querySelector('#originalPrice').value ;
    let discountRate = document.querySelector('#discountRate').value ;

    discountRate = (discountRate/100 );
    let sellingPrice = (op - (discountRate*op));
    let discountPirce = document.querySelector("#discountPirce").value = sellingPrice ;


}