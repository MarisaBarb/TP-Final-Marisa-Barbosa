function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let consulta = document.getElementById("consulta").value;
    let errores = "";

    if (nombre === "") errores += "El nombre es obligatorio.\n";
    if (apellido === "") errores += "El apellido es obligatorio.\n";
    if (email === "") errores += "El email es obligatorio.\n";
    if (telefono === "") errores += "El teléfono es obligatorio.\n";
    if (consulta === "") errores += "La consulta es obligatoria.\n";

    if (errores !== "") {
        alert(errores);
        return false;
    } else {
        alert("Su consulta ha sido enviada. Nos comunicaremos a la brevedad. Gracias!");
        document.getElementById("btnEnviar").classList.add("btn-enviado");
        return true;
    }
}
