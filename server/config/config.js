// PUERTO 
process.env.PORT = process.env.PORT || 3000;

// ENTORNO 
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// FIRMA SECRETA DE JWT 
process.env.FIRMA = process.env.FIRMA || 'firma-super-secreta';

// CONEXION A LA BASE DE DATOS 
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/starbucks';
    }else{
        urlDB = 'mongodb+srv://admin:8cc4c184@cluster0-azowl.mongodb.net/starbucks?retryWrites=true&w=majority';
    }

process.env.URLDB = urlDB;