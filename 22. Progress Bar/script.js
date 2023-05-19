const continer = document.querySelector("#js-container") ;
const hightlight = document.querySelector("#bar-highlight") ;

let containerHeight ;
let continerPos ;

window.onscroll = function (){
    containerHeight = continer.offsetHeight - window.innerHeight ;
    continerPos  = continer.getBoundingClientRect() ;
    diff = containerHeight + continerPos.top ;
    progressPercetage = diff / containerHeight  * 100 ;

    cssWidth  = Math.floor(100 - progressPercetage ) ;
    hightlight.style.width = cssWidth  + "%" ;
}