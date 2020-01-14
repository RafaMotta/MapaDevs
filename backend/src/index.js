const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://rafaelmotta:palpe01@iddqd1@cluster0-pnhxj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());//precisa vir antes das rotas

app.use(routes);



//Métodos HTTP: GET, POST, PUT DELETE

// Tipos de parametros: 
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração, remoção)
// Body: request.body (Dados para alteração, criação de um registro)

//MongoDB (não-relacional)


app.listen(3333);