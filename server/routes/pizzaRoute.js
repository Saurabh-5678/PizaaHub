// const express =require('express')
// const router = express.Router();
// const pizzaModel = require('../models/pizzaModel');


// router.get("/getAllPizzas",async(req,res)=>{
//     try {
//         const pizzas = await pizzaModel.find({})
//         res.send(pizzas)
//         console.log(pizzas)
//     } catch (error) {
//         return res.status(400).json({message:error});
//     }
// })

// module.exports = pizzaModel;

const express = require('express');
const router = express.Router();
const pizzaModel = require('../models/pizzaModel');

router.get("/getAllPizzas", async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);
        console.log(pizzas);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;

