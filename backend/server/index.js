const express=require('express');
const server=express();
const fileupload=require('express-fileupload');
const PORT=process.env.PORT || 3003;
const {errors}=require('celebrate');

server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
}));

server.get('/',(req,res)=>res.send('Bienvenido a la pagina principal'));

server.use('/api/v1',require('../routes'))

server.use(errors());


module.exports={server,PORT}