function errorCampo(campo, campoError){ //validar si me ingreso algo
    var valorInput = document.getElementById(campo).value.trim();
    var mensajeError = document.getElementById(campoError);
    if (valorInput === "") {//Si el input esta vacio
        if(campo === "username"){ //Y el campo a controlar es usuario
            mensajeError.textContent = "El nombre de usuario es requerido.";
        }else if(campo === "password"){ //Y el campo a controlar es contraseña, si hay más campos a validar usar switch case
            mensajeError.textContent = "La contraseña es requerida.";
        }
        return false; //cuando no me ingresa nada
    }else{
        mensajeError.textContent = '';
        return true; //si me ingreso algo
    }
}
document.getElementById("loginForm").addEventListener("submit", function(event) { //Valido aunque no toque ningun input
    event.preventDefault(); // Evita el envío del formulario
    let validadorUser = errorCampo("username", "usernameError");
    let validadorPass = errorCampo("password", "passwordError");
    if(validadorUser && validadorPass){//si todas me dan true redirijo
        this.submit();
    }
});
document.getElementById("username").addEventListener("blur", function() {
    errorCampo("username", "usernameError");
});
document.getElementById("username").addEventListener("input", function() {
    document.getElementById("usernameError").textContent = '';
});
document.getElementById("password").addEventListener("blur", function() {
    errorCampo("password", "passwordError");
});
document.getElementById("password").addEventListener("input", function() {
    document.getElementById("passwordError").textContent = '';
});