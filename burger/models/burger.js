// functions to interact with the orm

// Importing database models
const { SelectAll, InsertOne, UpdateOne } = require('../config/orm')

const burger = {
    get_burgers: cb =>{
        SelectAll('burgers', data =>{
            cb(data)
        })
    },
    add_burger: (new_burger, cb) =>{
        InsertOne('burgers', new_burger)
        cb(new_burger)
    },
    update_burger: (updated_burger, conditionals, cb)=>{
        UpdateOne('burgers', updated_burger, conditionals)
        cb(updated_burger)
    }
}

module.exports = burger