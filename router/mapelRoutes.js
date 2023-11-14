const express = require('express')
const router = express.Router()

const mapelcontroller = require('../controllers/mapelController')

router.get('/mapel', mapelcontroller.index)
router.get('/mapel/:id', mapelcontroller.show)
router.post('/mapel', mapelcontroller.store)

module.exports=router