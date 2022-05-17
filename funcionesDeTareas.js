const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leerArchivo: function() {
        let tareas = fs.readFileSync('tareas.json', 'utf-8');
        return JSON.parse(tareas);
    },
    escribirJSON: function () {
    
    },
    guardarTarea: function (nuevoObjeto) {
        let readfile = fs.readFileSync ('tareas.json', 'utf-8');
        let readParseado = JSON.parse (readfile);
        let spreadOperated = [...readParseado, nuevoObjeto];
        let nuevoArrayJSON = JSON.stringify (spreadOperated);
        let tareaWrite = fs.writeFileSync ('tareas.json', nuevoArrayJSON);
        return tareaWrite;
    },
    leerPorEstado: function (estadoConsola) {
        let readfile = fs.readFileSync ('tareas.json', 'utf-8');
        let fileParseado = JSON.parse (readfile);
        let resultadoFiltrado = fileParseado.filter (function (element) {
        return  element.estado === estadoConsola    
        });
        return resultadoFiltrado;
    }
};

module.exports = archivoTareas;
