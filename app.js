
// se trae el modelo del servidor
const ServidorModelo=require('./models/ServidorModelo.js')

// se trae el dotenv
require('dotenv').config()

// puedo personalizar mi servidor
const servidorJugadores=new ServidorModelo()

//encender servidor
servidorJugadores.encederServidor()
  


 
