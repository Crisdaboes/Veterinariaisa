module.exports = function duenosHandler(duenos){
    return {
        get: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            console.log('handler duenos',{ data })
            if(duenos[data.indice]){
              return callback(200, duenos[data.indice]);
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `dueno con indice ${data.indice} no encontrado`, 
            });
          }
          callback(200, duenos);
        },
        post: (data, callback) => {
          duenos.push(data.payload);
          callback(201, data.payload);
        },
        put: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            if(duenos[data.indice]) {
              duenos[data.indice] = data.payload;
              return callback(200, duenos[data.indice]);
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `dueno con indice ${data.indice} no encontrado`, 
            });
          }
          // No aparece el callback 400 en postman cuando no se envia un indice
          callback(400, {mensaje: "indice no enviado"});
        },
        delete: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            if(duenos[data.indice]) {
              duenos = duenos.filter(
                (_dueno, indice) => indice != data.indice
              );  // se pone raya al piso por que es una variabl que no se va a utilizar
              return callback(204, {
                mensaje: 'elemento con indice ${data.indice} eliminado',
              });
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `dueno con indice ${data.indice} no encontrado`, 
            });
          }
          // No aparece el callback 400 en postman cuando no se envia un indice
          callback(400, {mensaje: "indice no enviado"});
        },
        
      };
      // Create Read Update Delete Listar CRUDL
};