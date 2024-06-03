//para el registro gerando un coreoo
function registrarUsuario() {
    var nombre = document.getElementById("nombre").value.trim().toLowerCase();
    var apellidos = document.getElementById("apellidos").value.trim().toLowerCase();
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var contraseña = document.getElementById("password").value;

    if (contraseña.length < 6) {
        document.getElementById("resultadoRegistro").innerHTML = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    var año = fechaNacimiento.substring(2, 4);
    var mes = fechaNacimiento.substring(5, 7);
    var dia = fechaNacimiento.substring(8, 10);

    var primeraLetraNombre = nombre.substring(0, 2);
    var ultimasLetrasPrimerApellido = apellidos.substring(apellidos.length - 3);

    var correo = primeraLetraNombre + ultimasLetrasPrimerApellido + año + dia + mes + "@gmail.com";

    localStorage.setItem('registeredEmail', correo);
    localStorage.setItem('registeredPassword', contraseña);

    var mensaje = "Registro exitoso.<br>Su correo es: " + correo + ".<br>Bienvenido, " + nombre.charAt(0).toUpperCase() + nombre.slice(1);
    document.getElementById("resultadoRegistro").innerHTML = mensaje;
}
//para autenticacion 
function validar(event) {
    event.preventDefault(); 
    let correo = document.getElementById("gmail").value;
    let contraseña = document.getElementById("n2").value;
    console.log(correo + " " + contraseña);
    const correoCorrecto = "admin@gmail.com";
    const contraseñaCorrecta = "123";

    if (correo === correoCorrecto && contraseña === contraseñaCorrecta) {
        document.getElementById('res1').innerHTML = "Inicio de sesión correcto";
        window.location.href = 'index.html';
        console.log("entro");
    } else {
        document.getElementById('res1').innerHTML = "Correo electrónico o contraseña incorrecta";
    }
}
