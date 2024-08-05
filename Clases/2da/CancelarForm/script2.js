function errorUser(){ //validar si me ingreso algo
    var username = document.getElementById("username").value.trim();
    var usernameError = document.getElementById("usernameError");
    if (username === "") {
        usernameError.textContent = "El nombre de usuario es requerido.";
        return false; //cuando no me ingresa nada
    }else{
        usernameError.textContent = '';
        return true;
    }
}
function errorPass(){ //validar si me ingreso algo
    var password = document.getElementById("password").value.trim();
    var passwordError = document.getElementById("passwordError");
    if (password === "") {
        passwordError.textContent = "La contraseña es requerida.";
        return false; //cuando no me ingresa nada
    }else{
        passwordError.textContent = '';
        return true;
    }

}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    if(errorUser() && errorPass()){//si todas me dan true redirijo
        this.submit();
    }
});
document.getElementById("username").addEventListener("focus", function(){
    document.getElementById("usernameError").textContent = "";
})
document.getElementById("username").addEventListener("blur",errorUser);

document.getElementById("password").addEventListener("focus", function(){
    document.getElementById("passwordError").textContent = "";
})
document.getElementById("password").addEventListener("blur",errorPass);