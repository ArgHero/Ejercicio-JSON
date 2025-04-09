let btnUsuario = document.getElementById("guardar");
let btnBorrar = document.getElementById("eliminar");
let txtNombre = document.getElementById("txtNombre");
let msgError = document.getElementById("msgError");

let title = document.getElementsByClassName("bienvenida").item(0);


let usuario = localStorage.getItem("usuario");

if(title){
    if(usuario)
        title.innerText = `Hola, ${usuario} bienvenido de nuevo.`;
    else
        title.innerText = "Por favor ve al index e ingresa tu nombre";
}

if(btnBorrar){
    btnBorrar.addEventListener("click",function(event){
        localStorage.removeItem("usuario");
    });//btnBorrar
}

if(msgError){
    msgError.style.display = 'none';
    msgError.style.color = 'red';
}
if(btnUsuario){
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
};//existe btn

