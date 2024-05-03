module.exports = function consultasHandler(consultas){
    return {
        get: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            console.log('handler consultas',{ data })
            if(consultas[data.indice]){
              return callback(200, consultas[data.indice]);
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `consulta con indice ${data.indice} no encontrada`, 
            });
          }
          callback(200, consultas);
        },
        post: (data, callback) => {
          let nuevaConsulta = data.payload;
          nuevaConsulta.fechaCreacion = new Date();
          nuevaConsulta.fechaEdicion = null;
          consultas = [...consultas, nuevaConsulta];
          callback(201, data.payload);
        },
        put: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            if(consultas[data.indice]) {
              const { fechaCreacion } = {...consultas[data.indice]};
              consultas[data.indice] = {
                ... data.payload,
                fechaCreacion,
                fechaEdicion: new Date(),
            };
              return callback(200, consultas[data.indice]);
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `consulta con indice ${data.indice} no encontrada`, 
            });
          }
          // No aparece el callback 400 en postman cuando no se envia un indice
          callback(400, {mensaje: "indice no enviado"});
        },
        delete: (data, callback) => {
          if(typeof data.indice !== "undefined"){
            if(consultas[data.indice]) {
              consultas = consultas.filter(
                (_consulta, indice) => indice != data.indice
              );  // se pone raya al piso por que es una variabl que no se va a utilizar
              return callback(204, {
                mensaje: 'elemento con indice ${data.indice} eliminado',
              });
            }
            return callback(404, {
              //Para especificar el mensaje con un valor especifico se debe utilizar ``
              mensaje: `consulta con indice ${data.indice} no encontrada`, 
            });
          }
          // No aparece el callback 400 en postman cuando no se envia un indice
          callback(400, {mensaje: "indice no enviado"});
        },
        
      };
      // Create Read Update Delete Listar CRUDL
};