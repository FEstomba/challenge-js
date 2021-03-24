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
    res.send('Balance actual es: $20000')
});

app.get('/lastOperations', (req,res) => {
    res.send('Ultimas 10 operaciones registradas:')
});

app.post('/new', (req,res) =>{
    const sql = 'INSERT INTO OPERATIONS SET ?';
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

app.get('/operation-by-type', (req,res) => {
    res.send('Egreso o Ingreso')
})

//Crea una conexion con la base de datos 
connection.connect(error =>{
    if (error) throw error;
    console.log('database server running!')
});

//Inicio el servidor en el puerto configurado
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
