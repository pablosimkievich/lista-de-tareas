const archivo = require('./funcionesDeTareas');

let arrayTareas = archivo.leerArchivo();

let accion = process.argv[2];

let filtrarEstado = process.argv[3];

switch (accion) {
   
     
    case 'listar':
    console.log ("Listado de tareas");
    console.log ("------------------");
    arrayTareas.forEach( (ele, inde) => {
        let indice = inde + 1
        return console.log( indice + ". " + ele.titulo + " - " + ele.estado);
    });
        break;
    case 'crear':
        nuevoObjeto = { titulo: process.argv[3], estado: "pendiente"};
        console.log ( "Creando: " + nuevoObjeto.titulo + ' - ' + nuevoObjeto.estado);
        archivo.guardarTarea(nuevoObjeto);
        break;
    case 'filtrar':
        let FilterVar = archivo.leerPorEstado(filtrarEstado);
        FilterVar.forEach ( (element, index) => {
        let indice = index + 1
        return console.log( indice + ". " + element.titulo + " - " + element.estado)
            });
        break;
        default:
    console.log ("Atención - Tienes que pasarme una accion");
    console.log ("Las acciones disponibles son: listar, crear o filtrar");
    console.log ("----------------------------------------");
        break;
};
