const express = require('express');

const app = express();

/* Dependência "nodemon" para ficar observando a aplicação, enquanto ela está em execução
 * Comando: yarn nodemon index.js 
 */

// Será válido para todas as rotas da aplicação
app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

/*  Tipos de parâmetros:
 *
 *  Query params: request.query (Filtros, ordenação, paginação, ...)
 *  > Utilizados na maioria das vezes no método GET (utilizando chave e valor na URL)
 *  > Ex: http://localhost:3333/users?search=Marcílio
 *  Route params: request.params (Identificar um recurso na alteração ou remoção)
 *  > Utilizados nos métodos PUT e DELETE
 *  Body: request.body (Dados para criação ou alteração de um registro)
 *  > Utilizados nos métodos POST ou PUT
 */

// MongoDB (Não-relacional)

app.get('/users', (request, response) => {
    console.log(request.query)
    return response.json({ message: 'Hello World'});
});

app.put('/users/:id', (request, response) => {
    console.log(request.params)
    return response.json({ message: 'Route Params'});
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params)
    return response.json({ message: 'Route Params'});
});

app.post('/users', (request, response) =>{
    console.log(request.body);
    return response.json({ message: 'Body Params'});
});

app.listen(3333);