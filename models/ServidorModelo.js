const express = require('express')

class ServidorModelo {

    constructor(){

        this.app = express()
        this.enrutarPeticion()

    }
    encederServidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido..."+process.env.PUERTO)
        })        

    }

    enrutarPeticion(){

        this.app.get('/avanzada/v1/juagadores', function (req, res) {
            res.send('peticion de tipo GET (para buscar todos los jugadores)')
        })
        
        this.app.get('/avanzada/v1/juagadores/id', function (req, res) {
            res.send('peticion de tipo GET (para buscar un jugador)')
        })
        
        this.app.post('/avanzada/v1/juagadores', function (req, res) {
            res.send('peticion de tipo POST (para insertar)')
          })
        
        this.app.put('/avanzada/v1/juagadores/id', function (req, res) {
            res.send('peticion de tipo PUT (para modificar)')
          })
        
          
        this.app.delete('/avanzada/v1/juagadores/id', function (req, res) {
            res.send('peticion de tipo DELETE    (para eliminar)')
          })

    }

    conectarBD(){

    }

}

module.exports=ServidorModelo