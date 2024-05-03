module.exports = function mascotasHandler(mascotas){
    return {
        get: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            console.log('handler mascotas',{ data })
            if(mascotas[data.indice]){
              return callback(200, mascotas[data.indice]);
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `mascota con indice ${data.indice} no encontrada`, 
            });
          }
          callback(200, mascotas);
        },
        post: (data, callback) => {
          mascotas.push(data.payload);
          callback(201, data.payload);
        },
        put: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            if(mascotas[data.indice]) {
              mascotas[data.indice] = data.payload;
              return callback(200, mascotas[data.indice]);
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `mascota con indice ${data.indice} no encontrada`, 
            });
          }
          // No aparece el callback 400 en postman cuando no se envia un indice
          callback(400, {mensaje: "indice no enviado"});
        },
        delete: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            if(mascotas[data.indice]) {
              mascotas = mascotas.filter(
                (_mascota, indice) => indice != data.indice
              );  // se pone raya al piso por que es una variabl que no se va a utilizar
              return callback(204, {
                mensaje: 'elemento con indice ${data.indice} eliminado',
              });
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `mascota con indice ${data.indice} no encontrada`, 
            });
          }
          // No aparece el callback 400 en postman cuando no se envia un indice
          callback(400, {mensaje: "indice no enviado"});
        },
        
      };
      // Create Read Update Delete Listar CRUDL
};








