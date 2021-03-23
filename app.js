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

app.get('/', (req,res) => {
    res.send('Balance actual es: $20000')
});

app.get('/', (req,res) => {
    res.send('Ultimas 10 operaciones registradas:')
});

app.post('/add', (req,res) =>{
    res.send('Nueva operacion')
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


