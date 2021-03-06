//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Conection server database 
let urlDatabase;

if (process.env.NODE_ENV === 'dev') {
    urlDatabase = 'mongodb://localhost:27017/Cafe';
} else {
    urlDatabase = process.env.MONGO_URI;
}

process.env.urlDb = urlDatabase;