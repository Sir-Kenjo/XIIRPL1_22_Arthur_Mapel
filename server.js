const express = require('express')
const app = express()
const port = 3001
const mapelrouter = require('./router/mapelRoutes')
const connectDB =  require('./config/config')

app.use(express.json())
app.use(express.urlencoded({ extended:true}))

app.get('/', (req, res) =>{
    res.send('Hellow World!')
})

app.use(mapelrouter)

connectDB()

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})