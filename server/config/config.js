//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Conection server database 
let urlDatabase;

if (process.env.NODE_ENV === 'dev') {
    urlDatabase = 'mongodb://localhost:27017/Cafe';
} else {
    urlDatabase = 'mongodb+srv://Diego:321godie@cluster0.wmjps.mongodb.net/Cafe?retryWrites=true&w=majority';
}

process.env.urlDb = urlDatabase;