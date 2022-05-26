const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leerArchivo: function() {
        let tareas = fs.readFileSync('tareas.json', 'utf-8');
        return JSON.parse(tareas);
    },
    escribirJSON: function () {
        let leerArchivo = this.leerArchivo ();
        let archivoString = JSON.stringify (leerArchivo);
        let escribirArchivo = fs.writeFileSync ('tareas.json', archivoString );
        return escribirArchivo
    },
    guardarTarea: function (nuevoObjeto) {
        let readArchivoParseado = this.leerArchivo(); 
        let spreadOperated = [...readArchivoParseado, nuevoObjeto];
        let nuevoArrayJSON = JSON.stringify (spreadOperated);
        let tareaWrite = fs.writeFileSync ('tareas.json', nuevoArrayJSON);
        return tareaWrite;
    },
    leerPorEstado: function (estadoConsola) {
        let readFileParseado = this.leerArchivo()
        let resultadoFiltrado = readFileParseado.filter (function (element) {
        return  element.estado === estadoConsola    
        });
        return resultadoFiltrado;
    }
};

module.exports = archivoTareas;
