// dao/mongoose.js
const mongoose = require('mongoose');

// Reemplaza 'tu-uri-de-mongodb' con la URI de conexión proporcionada por MongoDB Atlas
const mongoURI = 'mongodb+srv://francopizzichini15:<password>@dbecommerce.5ro5hba.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
