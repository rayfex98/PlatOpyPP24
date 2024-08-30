document.getElementById("miForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let usuario = document.getElementById("usuario").value;
    let admin = "admin";
    if(usuario == ""){
        alert("usuario invalido");
        return;
    }else if(usuario == admin){
        this.submit();
    }
    else
    { 
        window.location.href = "landingpage.html";
    }
    
});