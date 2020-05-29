const axios = require('axios')
let id = 1

module.exports ={
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },
    newProducts: (req, res) => {
        const {id} = req.body;

        const db = req.app.get('db')

        db.create_product(id)
        .then(id => res.status(200).send(id))
        .catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.delete_product(id)
        .then(()=>res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
}