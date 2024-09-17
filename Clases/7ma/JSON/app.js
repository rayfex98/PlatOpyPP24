function cargarAlumnos() {
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';  // Limpiamos la lista antes de mostrar los usuarios

            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                li.dataset.id = user.id;
                li.addEventListener('click', () => mostrarDetalles(user));  // Agregamos el evento click para mostrar los detalles
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
}



// Función para mostrar los detalles de un usuario
function mostrarDetalles(user) {
    document.querySelector('#userName span').textContent = user.name;
    document.querySelector('#userEmail span').textContent = user.email;
    document.querySelector('#userPhone span').textContent = user.phone;
}

document.getElementById('cargarAlumnos').addEventListener('click', cargarAlumnos);
