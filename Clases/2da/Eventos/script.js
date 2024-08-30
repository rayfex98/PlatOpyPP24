//El primero nos permite agrandar el div cuando el mouse se encuentra sobre el
document.getElementById("caja").addEventListener("mouseover", function() {
    this.style.transition = "width 4s, height 2s"
    this.style.width = "300px";
    this.style.height = "200px";
  });
//El segundo, encojer el div cuando el mouse no se encuentra sobre el
document.getElementById("caja").addEventListener("mouseout", function() {
    this.style.transition = "width 0.5s, height 0.5s"
    this.style.width = "150px";
  });
//El tercero cambia su color cuando se clickea en el
document.getElementById("caja").addEventListener("click", function(){
    let color = this.style.backgroundColor;
    if(color == "lightcyan"){
        this.style.backgroundColor = "lightsalmon";
    }else{
        this.style.backgroundColor = "lightcyan";
    }
});
//El cuarto muestra un mensaje de error cada vez que dejamos el input vacio
document.getElementById("texto").addEventListener("focus", function(){
    error = document.getElementById("errorTexto");
    if(this.value == ""){
        error.style.display = "block";
    }else{
        error.style.display = "none";
    }
});