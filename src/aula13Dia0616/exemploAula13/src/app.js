const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Mundo");
});

app.get("/contato/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        id: id,
        nome: "Bob",
        email: "bob@domain.com"
    });
});

app.post("/contato", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    return res.json({
        nome,
        email
    });
});

app.put("/contato/:id", (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const email = req.body.email;
    return res.json({
        id,
        nome,
        email
    });
});

app.delete("/contato/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        id
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});