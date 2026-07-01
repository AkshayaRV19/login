function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if(username==""){
        alert("Please enter Email.");
        return;
    }

    if(password==""){
        alert("Please enter Password.");
        return;
    }

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(username)){
        alert("Please enter a valid Email ID.");
        return;
    }


    let passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(!passwordPattern.test(password)){
        alert(
            "Password must contain:\n\n"+
            "• Minimum 8 characters\n"+
            "• One Uppercase\n"+
            "• One Lowercase\n"+
            "• One Number\n"+
            "• One Special Character"
        );
        return;
    }

    const validEmail="admin@gmail.com";
    const validPassword="Admin@123";

    if(username!=validEmail){
        alert("Invalid Email ID.");
        return;
    }

    if(password!=validPassword){
        alert("Incorrect Password.");
        return;
    }

    
    if(document.getElementById("remember").checked){
        localStorage.setItem("savedEmail",username);
    }else{
        localStorage.removeItem("savedEmail");
    }

    alert("Login Successful!");
    window.location.href = "home.html";

}

function test(){} 


const eye=document.getElementById("togglePassword");
const pwd=document.getElementById("password");

eye.onclick=function(){

    if(pwd.type==="password"){

        pwd.type="text";

        eye.classList.remove("bi-eye-slash-fill");
        eye.classList.add("bi-eye-fill");

    }
    else{

        pwd.type="password";

        eye.classList.remove("bi-eye-fill");
        eye.classList.add("bi-eye-slash-fill");

    }

};




document.getElementById("forgot").onclick=function(e){

    e.preventDefault();

    alert("password  resend link is sent");

};




window.onload=function(){

    let email=localStorage.getItem("savedEmail");

    if(email){

        document.getElementById("username").value=email;

        document.getElementById("remember").checked=true;

    }

};
