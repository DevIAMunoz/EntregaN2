document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var rut = document.getElementById('rut').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var edad = parseInt(document.getElementById('edad').value);

    if (nombre.length < 3 || nombre.length > 20 || apellido.length < 3 || apellido.length > 20) {
        alert('El Nombre y el Apellido deben tener entre 3 y 20 caracteres.');
        return;
    }

    if (!correo.includes('@')) {
        alert('El correo electrónico debe contener "@" en el formato.');
        return;
    }

    if (rut.length < 10 || rut.length > 11 || !rut.includes('-')) {
        alert('El RUT debe tener entre 10 y 11 caracteres y contener un "-" en el penúltimo lugar.');
        return;
    }

    if (password1 !== password2) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    if (!/[a-z]/.test(password1) || !/[A-Z]/.test(password1) || !/\d/.test(password1)) {
        alert('La contraseña debe contener al menos una mayúscula, una minúscula y un número.');
        return;
    }

    if (edad < 18) {
        alert('Debe ser mayor de 18 años para registrarse.');
        return;
    }

    // Guardar los datos en localStorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el usuario ya existe
    if (usuarios.some(u => u.usuario === usuario)) {
        alert('Este usuario no está disponible.');
        return;
    }

    // Guardar el nuevo usuario
    usuarios.push({ usuario, nombre, apellido, correo, rut, password1, edad });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('¡Registro exitoso!');
});


