const $botonIngresar = document.querySelector("#ingresar");

$botonIngresar.onclick = function(){
    const nombreUsuario = document.querySelector("#nombre-usuario").value
    const apellidoUsuario = document.querySelector("#apellido-usuario").value
    const edadUsuario = Number(document.querySelector("#edad-usuario").value)

    document.querySelector("#resultado").innerText = "Hola " + nombreUsuario + " " + apellidoUsuario + " tenes " + edadUsuario +" anios";


    return false
}
