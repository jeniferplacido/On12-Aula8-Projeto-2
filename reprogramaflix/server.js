const express = require ("express"); // importando o express
const app = express(); // instanciando o express para acessar as funcionalidades contidas nele

app.listen(4000, () =>{
    console.log('Servidor está rodando na porta 3000 UHUUUUL')
})

app.get ('/', (request, response) =>{
    response.status(200).send(
        {
            "DeuCerto": "Olá Pessoas, Sejam Bem Vindos a {REPROGRAMAFLIX}"
        }
    )
})