const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://rafaelmotta:MpQidoT6f98eLLWe@cluster0-pnhxj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());//precisa vir antes das rotas

app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros: 
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração, remoção)
// Body: request.body (Dados para alteração, criação de um registro)

//MongoDB (não-relacional)

server.listen(3333);