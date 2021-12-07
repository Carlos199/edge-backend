const mongoose = require('mongoose')

const DB_URI = `mongodb+srv://luis:luis@cluster0.cajuf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(
  DB_URI,
  {
    // useMongoClient: true
    keepAlive: true,
    useNewUrlParser: true,
    useUniFiedTopology: true
  },
  err => {
    if (err) {
      console.log('DB ERROR')
    } else {
      console.log('conexion correcta')
    }
  }
)

module.exports = mongoose
