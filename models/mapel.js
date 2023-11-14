const mongoose = require ('mongoose')

const MapelSchema = new mongoose.Schema({
    id : {
        type: Number,
        required:true,
    },
    namaMapel: {
        type: String,
        required: true,
      },
      guruMapel: {
        type: String,
        required: true,
      },
      jamMapel: {
        type: String,
        required: true,
      },
      ruangan: {
        type: String,
        required: true,
      },
      kategori: {
        type: String,
        required: true,
      },
})

module.exports = mongoose.model('Mapel', MapelSchema)