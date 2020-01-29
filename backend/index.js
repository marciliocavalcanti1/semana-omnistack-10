const express = require('express');
const app = express();

// get, post, put, dele

/* Dependência "nodemon" para ficar observando a aplicação, enquanto ela está em execução
 * Comando: yarn nodemon index.js 
 */

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

app.listen(3333);