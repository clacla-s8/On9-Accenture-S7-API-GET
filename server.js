const express = require('express');
const app = express();
const porta = 3000;
const mulheresTI = require('./mulheresTI.json');

app.use(express.json());

app.get('/mulheresTI', function(req, res) { // retorna todo o arquivo json
    res.json(mulheresTI);
});

app.get('/mulheresTI/:id', function(req, res) { // 
    const parametroId = req.params.id; // id recebido por parameto
    const mulheresTIFindId = mulheresTI.find(m => m.id == parametroId); // verificando se o id recebido é o mesmo que algum id da lista mulheresTI
    if (mulheresTIFindId == null) { // verifica de o id existe
        res.status(404).send("Id não encontrado!"); // se o id n existe, envia uma mensagem de não entrado 
    } else {
        res.json(mulheresTIFindId); // se o id existe, retorna as informações correspondentes
    }

});

app.listen(porta, function() {
    console.log("server on");
});