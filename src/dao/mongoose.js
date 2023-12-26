const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://francopizzichini15:<password>@dbecommerce.5ro5hba.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
