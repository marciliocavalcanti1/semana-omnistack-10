const express   = require('express');
const mongoose  = require('mongoose');
const routes    = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-jdw7b.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Será válido para todas as rotas da aplicação
app.use(express.json());
app.use(routes);

app.listen(3333);