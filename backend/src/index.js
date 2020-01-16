const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
mongoose.connect('mongodb+srv://EduardoSoares:15975325@omnistack10-goels.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)



// Método HTTP: GET (para receber informações), POST (criar informação), PUT(editar um recurdo da aplicação), DELETE (deletar)

// Tipos de parâmetros

// Query params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)


app.listen(3333)