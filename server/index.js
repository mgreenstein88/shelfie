require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4578
const massive = require('massive')
const {CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.newProducts)
app.delete('/api/delete', ctrl.deleteProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))