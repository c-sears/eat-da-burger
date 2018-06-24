// Object-relational mapping for handling all database queries

const connection = require('./connection')

const orm = {
    /**
     * @param  {string} table declaring which table to query on
     * @param  {function} cb callback function to execute on returned query data
     */
    SelectAll: (table, cb)=>{
        const query = `SELECT * FROM ??`
        connection.query(query, table, (err, data) =>{
            if (err) throw err
            cb(data)
        })
    },

    /**
     * @param  {string} table declaring which table to insert into
     * @param  {object} values keys equal to table column names, values holding data to be added to table
     */
    InsertOne: (table, values)=>{
        const query = `INSERT INTO ?? SET ?;`
        const inserts = [table, values]
        const myquery = connection.query(query, inserts, (err, data)=>{
            if(err) throw err
        })
    },
    /**
     * @param  {string} table declaring which table to query
     * @param  {object} values keys equal to columns to update, values with updated data
     * @param  {object} condition key equal to column to match with value provided
     */
    UpdateOne: (table, values, condition)=>{
        const query = `UPDATE ?? SET ? WHERE ?`
        const inserts = [table, values, condition]
        connection.query(query, inserts, (err, data)=>{
            if (err) throw err
        })
    }
}


module.exports = orm

