document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    fetch('usuarios.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(usuarios => {
            const usuarioEncontrado = usuarios.find(user => user.usuario === usuario && user.contrasena === contrasena);
            const mensaje = document.getElementById('mensaje');

            if (usuarioEncontrado) {
                if (usuarioEncontrado.rol === 'admin') {
                    // Redirigir a la página de administración
                    window.location.href = 'admin.html';
                } else {
                    // Redirigir a la página de usuario
                    window.location.href = 'landing.html';
                }
            } else {
                mensaje.textContent = 'Usuario o contraseña incorrectos';
                mensaje.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
});
