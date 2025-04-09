btnUsuario = document.getElementsByClassName("btn").item(0);
txtNombre = document.getElementById("txtNombre");
msgError = document.getElementById("msgError");


if(msgError){
    msgError.style.display = 'none';
    msgError.style.color = 'red';
}

btnUsuario.addEventListener("click",function(event){
    event.preventDefault();
    let usuario = txtNombre.value.trim();
    if(usuario!=''){
        localStorage.setItem("usuario",usuario);
        txtNombre.value = "";
        msgError.style.display = 'none';
        window.location.href="./welcome.html";

    }else
        msgError.style.display = 'block';
    
});//btn