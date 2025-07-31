// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = ["Amigos Registrados: "];
let amigosDisponibles = []; // Array auxiliar para el sorteo sin repetidos

function actualizarAmigosDisponibles() {
    // Reinicia el array auxiliar con los amigos actuales (sin el encabezado)
    amigosDisponibles = listaAmigos.slice(1);
}

/* Crear una funcion para agregar amigos
        Tareas a realizar:
Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío.Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía. */
function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    } else {
        if (listaAmigos.includes(amigo.value)) {
            alert('Este amigo ya está registrado, prueba otro nombre.');
            amigo.value = '';
            return;
        } else {
            listaAmigos.push(amigo.value);
            amigo.value = '';
            mostrarAmigos();
            actualizarAmigosDisponibles();
            return;
        }
    }
}

/* Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
        Tareas específicas:
Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista. */
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos'); // Obtenemos el elemento de la lista donde se mostrarán los amigos
    lista.innerHTML = ''; // Limpiamos la lista existente
    // Iteramos sobre el arreglo de amigos
    for (let i = 0; i < listaAmigos.length; i++) { // Recorremos el arreglo de amigos
        let li = document.createElement('li'); // Creamos un nuevo elemento <li>
        li.textContent = listaAmigos[i]; // Asignamos el nombre del amigo al contenido del <li>
        lista.appendChild(li); // Agregamos el <li> a la lista
    }
    return;
}

/* Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
        Tareas específicas:
Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado. */
function sortearAmigo() {
    if (listaAmigos.length <= 1) { // Validamos que haya amigos disponibles, seria 0 pero el primer elemento es el encabezado 
        alert('No hay amigos aun para sortear.'); // Mostramos un mensaje si no hay amigos
        return;
    }
    // Si ya no quedan amigos disponibles, reiniciamos el array auxiliar
    if (amigosDisponibles.length === 0) {
        actualizarAmigosDisponibles();
        alert('Todos los amigos ya han sido sorteados. ¡Comenzamos de nuevo!');
    }
    // Sorteamos entre los disponibles
    let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    let amigoSorteado = amigosDisponibles[indiceAleatorio];
    amigosDisponibles.splice(indiceAleatorio, 1); // Eliminamos el amigo sorteado del array auxiliar
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Te tocó: ${amigoSorteado}!`;

    // Oculta el mensaje después de 5 segundos
    setTimeout(() => {
        resultado.innerHTML = '';
    }, 5000);
}