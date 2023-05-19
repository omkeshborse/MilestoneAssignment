function degreeToCelciusConvert(){
    let degreesCelcius = document.getElementById('inputOne').value  ;
    // degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32;
    parseInt(degreesCelcius) ;
    let Farenheit = document.getElementById('inputTwo');

    Farenheit.value = (degreesCelcius*9/5 + 32);
   
}
function celciusToFahrenheitConvert(){
    let Farenheit = document.getElementById('inputFarenheit').value  ;
    //  d = (f-32 )5/9
    parseInt(Farenheit) ;
    let degreesCelcius = document.getElementById('inputCelcius');

    degreesCelcius.value = ((Farenheit-32)*(5/9));
    
}
