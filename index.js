// Importação de dependências
const express = require("express");
require("dotenv").config();
const cors = require("cors");

// Arquivo de conexão com o banco de dados
const connectToDataBase = require("./src/database/database");

// Importação de arquivos de rotas
const usuario = require("./src/router/usuario.router");
const auth = require("./src/router/auth.router");
const pizza = require("./src/router/pizza.router");
const sabor = require("./src/router/sabor.router");
const carrinho = require("./src/router/carrinho.router");
const pedido = require("./src/router/pedido.router");
const docs = require("./src/router/docs.router");

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors(
    {
        origin: [
            "localhost:3001",
            "localhost:3002"
        ],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
));

connectToDataBase();

// Chamado das rotas
app.use("/usuario", usuario);
app.use("/auth", auth);
app.use("/pizza", pizza);
app.use("/sabor", sabor);
app.use("/carrinho", carrinho);
app.use("/pedido", pedido);
app.use("/docs", docs);

// Rota inicial da aplicação
app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo a Pizzaria PizzArte"
    });
});

app.listen(port, () => {
    console.log(`servidor rodando em: http://localhost:${port}`);
});