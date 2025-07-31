// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = ["Amigos Registrados: "];

/* Crear una funcion para agregar amigos
        Tareas a realizar:
Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío.Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía. */
function agregarAmigo() {
    // Se podria obtener el valor tambien por document.querySelector, ya que es el unico elemento de tipo input, pero se recomienda usar getElementById para mayor claridad
    let amigo = document.getElementById('amigo');
    // Validamos que el campo no este vacio
    if (amigo.value.trim() === '') { // Queria que no aceptara como amigo un espacio en blanco, con o sin espacios, por eso uso trim()
        alert('Por favor, inserte un nombre.'); // Mostramos un mensaje de error
        return;
    } else {
        if (listaAmigos.includes(amigo.value)) { // Verificamos si el amigo ya está en la lista
            alert('Este amigo ya está registrado, prueba otro nombre.'); // Mostramos un mensaje si el amigo ya existe
            amigo.value = ''; // Limpiamos el campo de entrada
            return;
        } else {
            listaAmigos.push(amigo.value);
            amigo.value = ''; // Limpiamos el campo de entrada
            mostrarAmigos(); // Llamamos a la función para mostrar los amigos en la lista
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
    let indiceAleatorio = Math.floor(Math.random() * (listaAmigos.length - 1)) + 1; // Generamos un índice aleatorio, evitando el primer elemento que es el título
    console.log(indiceAleatorio); // Mostramos el índice aleatorio en la consola para depuración
    let amigoSorteado = listaAmigos[indiceAleatorio]; // Obtenemos el nombre sorteado
    document.getElementById('resultado').innerHTML = `Te toco: ${amigoSorteado}!`; // Mostramos el resultado
}