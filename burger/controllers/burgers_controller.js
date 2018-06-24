// Routing all appropriate http requests with their appropriate database calls

const express = require('express')

const burger = require('../models/burger')

const router = express.Router()

router.get('/', (req,res)=>{
    burger.get_burgers(burgers =>{
        res.render('index', {burgers:burgers})
    })
})

router.post('/burger/add', (req,res)=>{
    const new_burger = req.body
    burger.add_burger(new_burger, (burgers)=>{
        burger.get_burgers(burgers=>{
            res.render('index', {burgers:burgers})
        })
    })
})

router.put('/burger/update', (req,res)=>{
    burger.update_burger({devoured:req.body.devoured}, {id:req.body.id}, (burgers)=>{
        burger.get_burgers(burgers =>{
            res.render('index', {burgers:burgers})
        })
    })
})


module.exports = router