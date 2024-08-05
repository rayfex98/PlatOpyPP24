document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de los campos
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    // Obtiene los elementos de los mensajes de error
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

    // Resetea los mensajes de error
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Verifica si el campo de nombre de usuario está vacío
    if (username === "") {
        usernameError.textContent = "El nombre de usuario es requerido.";
    }

    // Verifica si el campo de contraseña está vacío
    if (password === "") {
        passwordError.textContent = "La contraseña es requerida.";
    }

    // Redirige a la página de destino si ambos campos están completos
    if (username !== "" && password !== "") {
        this.submit();
    }
});
document.getElementById("username").addEventListener("focus", function(){
    document.getElementById("usernameError").textContent = "";
})
document.getElementById("username").addEventListener("blur", function(){
    if(this.value == ""){
        document.getElementById("usernameError").textContent = "El nombre de usuario es requerido.";
    }
});
document.getElementById("password").addEventListener("focus", function(){
    document.getElementById("passwordError").textContent = "";
})
document.getElementById("password").addEventListener("blur", function(){
    if(this.value == ""){
        document.getElementById("passwordError").textContent = "El nombre de usuario es requerido.";
    }
});