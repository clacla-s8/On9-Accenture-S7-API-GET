const express = require('express');
const app = express();
const porta = 3000;
const mulheresTI = require('./mulheresTI.json');
const r = express.Router();
app.use(express.json());

app.get('/mulheresTI', function(req, res) {
    res.json(mulheresTI);
});

app.get('/mulheresTI/:id', function(req, res) {
    const parametroId = req.params.id;
    const mulheresTIFindId = mulheresTI.find(m => m.id == parametroId);
    res.json(mulheresTIFindId);

});


app.listen(porta, function() {
    console.log("server on");
});