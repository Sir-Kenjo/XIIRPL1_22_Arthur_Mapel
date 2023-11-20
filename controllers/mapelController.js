const mapel = require('../models/mapel')
const Mapel = require ('../models/mapel')

module.exports = {
    index : async (req,res) => {
        try {
            const mapel = await Mapel.find()
            if(mapel.length > 0){
                res.statuus(200).json({
                    status:true,
                    data: mapel,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status:false,
                    message: "Data masih kosong!"
                })
            }
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    show: async (req, res) => {
        try {
            const mapel = await Mapel.findById(req.params.id)
            res.json({
                status: true,
                data: mapel,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat",
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    store: async (req, res) => {
        try {
            const mapel = await Mapel.create(req.body)
            res.status(200).json({
                status: true,
                data: mapel,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan",
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
}