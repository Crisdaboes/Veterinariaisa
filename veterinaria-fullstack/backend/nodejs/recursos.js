

module.exports = {
    mascotas: [
      {tipo: "perro", nombre: "Dante0", dueno: "Cristian"},
      {tipo: "perro", nombre: "Dante1", dueno: "Cristian"},
      {tipo: "perro", nombre: "Dante2", dueno: "Cristian"},
      {tipo: "perro", nombre: "Dante3", dueno: "Cristian"},
    ],

    veterinarias: [
      {nombre: "Alexandra", apellido: "Perez", documento: "12345"},
      {nombre: "Camila", apellido: "Ocampo", documento: "98765"},
      {nombre: "Jose", apellido: "Peña", documento: "78945"},
      
    ],

    duenos: [
      {nombre: "Diego", apellido: "Cifu", documento: "98754"},
      {nombre: "Claudia", apellido: "Diaz", documento: "74569"},
      {nombre: "Antonio", apellido: "Santofimio", documento: "284671"},
      
    ],

    consultas: [
      {mascota: 0, 
      veterinaria: 0, 
      fechaCreacion: new Date(), 
      fechaEdicion: new Date(),
      historia: "",
      diagnostico: "",
    },
    ]
  }