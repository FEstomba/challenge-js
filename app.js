const express = require ('express');
const mysql = require ('mysql');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Florcita',
    database: 'alkemy',
    port: '3306'
});

app.get('/balance', (req,res) => {
    const sql ='SELECT * FROM operations';

    connection.query(sql,( error, operations) =>{
        if (error) throw error;
        let balance=0
        for ( let operation of operations){
            operationObj= JSON.parse(JSON.stringify(operation))
            console.log(operationObj)
            switch(operationObj.type){
                case 'ingress': 
                balance = balance + operationObj.amount
                break;
                case 'egress': 
                balance = balance - operationObj.amount
                break;

            }
        }
        res.json(balance)

})});

app.get('/operations', (req,res) => {
    const {limit, type} = req.query   
    let sql = `SELECT * FROM operations`;

    if(type!== undefined){
        sql=sql+` WHERE type = '${type}'`
    }
    if(limit!== undefined){
        sql=sql+` LIMIT ${limit}`
    }
    connection.query(sql,( error, results) =>{
        if (error) throw error;

            res.json(results)
        
    });
});

app.post('/new', (req,res) =>{
    const sql = 'INSERT INTO operations SET ?';
        const operationObj = {
            date: req.body.date,
            concept: req.body.concept,
            amount: req.body.amount,
            type: req.body.type
        };
    
        connection.query(sql, operationObj, error => {
            if (error) throw error;
            res.send('New operation created');
        })
});

app.put('/update', (req,res) => {
    res.send('Actualizar operacion')
});

app.delete('/delete', (req,res) => {
    res.send('Eliminar operacion')
});



//Crea una conexion con la base de datos 
connection.connect(error =>{
    if (error) throw error;
    console.log('database server running!')
});

//Inicio el servidor en el puerto configurado
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
