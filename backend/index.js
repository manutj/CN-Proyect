require('dotenv').config()

const {server, PORT}=require('./server');
require('./database');

//Prueba del servidor express
server.listen(PORT,()=>{
    console.log(`Servidor iniciado en localhost:${PORT}`)
});

