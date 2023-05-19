function checkpassword(){
    let password= document.getElementById('password').value ;
    let confirmPassword= document.getElementById('confim-password').value;
    let message = document.getElementById('confirm-text');
    console.log("password" , password );
    console.log("confirmPassword", confirmPassword );
    if (password != 0) {
        if (password == confirmPassword) {
           
            message.innerText="password match";
            message.style.backgroundColor="#00FF00";        
        } else {
            
            message.innerText="password match";
           message.style.backgroundColor="#ffc3a0";       
        }
    } else {
        alert("Password can't be empty!");
        message.textContent = "please fill the password";
    }
}


