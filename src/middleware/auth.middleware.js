const jwt = require("jsonwebtoken");

const { findUserByIdService } = require("../service/usuario.service"); // Importa a função 'findUserByIdService' do service
const { schema } = require("../model/Usuario"); // Importa o 'schema' Usuario

// Middleware para autenticação via token JWT
module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization; // Obtém o token do cabeçalho de autorização da requisição

    // Verifica se o cabeçalho de autorização não está presente
    if(!authHeader){
        return res.status(401).send({ message: "O token não foi informado!" });
    }

    // Divide o cabeçalho em partes ["Bearer, <token>"]
    const parts = authHeader.split(" ");    

    // Verifica se o cabeçalho tem o formato esperado (Bearer, <token>)
    if (parts.length !== 2) {
        return res.status(401).send({ message: "Token inválido!" });
    }

    const [schema, token] =  parts;

    //teste para verificar se existe a palavra escrita no Schema
    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ message: "Token mal formado!" });
    }

    // Verifica a validade do token usando a chave secreta configurada no ambiente
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: "Token inválido!" });
        }

        // Busca o usuário no banco de dados com base no ID decodificado do token
        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){
            return res.status(401).send({ message: "Token inválido!" });
        }

        // Adiciona o ID do usuário decodificado ao objeto 'req'
        req.userId = decoded.id;

        return next();
    });
}