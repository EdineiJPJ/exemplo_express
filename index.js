const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (request, response) => {
    response.send ('Estoy aqui');
});
app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2;
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado);
});

app.get('/noticia', (request, response) => {
    const noticia = {
        id: 1,
        texto: "Bananeira plantada no meio da rua",
        autor: "globo reporter"
    }
    response.send (noticia);
});
app.get('/Noticias', (request, response) => {
    response.send ('Pagina de noticias');
});

app.get('/Noticias/seara', (request, response) => {
    response.send ('Pagina de noticias de seara');
});
app.listen(port, () => {
    console.log("Servidor Iniciado na porta" + port)
});
