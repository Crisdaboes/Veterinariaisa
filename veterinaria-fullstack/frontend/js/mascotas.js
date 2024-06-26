const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');

let mascotas = [
    {
        tipo: "Gato",
        nombre: "manchas",
        dueno: "Esteban",

    },
    {
        tipo: "Perro",
        nombre: "Luna",
        dueno: "Jhon",

    }
];

function listarMascotas() {
    const htmlMascostas = mascotas.map((mascota, index) => `<tr>
            <th scope="row">${index}</th>
            <td>${mascota.tipo}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.dueno}</td>
            <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar" ><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="fa-solid fa-trash"></i></button>
                
            </div>
            </td>
        </tr>`).join(" ");
        listaMascotas.innerHTML = htmlMascostas;
        Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index) => botonEditar.onclick = editar(index));
        Array.from(document.getElementsByClassName("eliminar")).forEach((botonEliminar, index) => botonEliminar.onclick = eliminar(index));
}

function enviarDatos(evento) {
    evento.preventDefault();
    const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    const accion = btnGuardar.innerHTML;
    switch(accion) {
        case 'Editar':
            mascotas[indice.value] = datos;
            break;
        default:
            mascotas.push(datos);
            break;
    }
    listarMascotas();
    resetModal();
}

function editar(index) {
    return function cuandoHagoClick () {
        btnGuardar.innerHTML = 'Editar'
        $('#exampleModalCenter').modal('toggle');
        const mascota = mascotas[index];
        nombre.value = mascota.nombre;
        dueno.value = mascota.dueno;
        tipo.value = mascota.tipo;
        indice.value = index;
        
    }
}


function resetModal() {
    nombre.value = '';
    dueno.value = '';
    tipo.value = '';
    indice.value = '';
    btnGuardar.innerHTML = 'Crear'
}


function eliminar(index) {
    return function clickEnEliminar() {
        mascotas = mascotas.filter((mascota, indiceMascota)=> indiceMascota !==index);
        listarMascotas();
    }

}
listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;
