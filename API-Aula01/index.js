const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
})


//sou aluno da noite, deixei salvo seu arquivo, voce deixou o computador ligado e desligou só o monitor.
//se cuida isabelly linda