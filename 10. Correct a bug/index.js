/* You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
array to corrdct thd bug. */

const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = []
function doubleNumber(num) {
  return num * 2
}
for (let i = 0; i < numbers.length; i++) {
  numbersDoubled.push(doubleNumber(numbers[i]))
}
console.log(numbersDoubled)
