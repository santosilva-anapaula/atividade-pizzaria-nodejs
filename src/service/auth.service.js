const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

// Função que realiza a busca no banco de dados para encontrar um usuário pelo email
const loginService = (email) => Usuario.findOne({ email: email }).select("senha");

// Função que gera um token JWT com base no ID do usuário
const generateToken = (userId) => jwt.sign({ id: userId }, process.env.SECRET, {  expiresIn: 86400 });

module.exports = {
    loginService,
    generateToken
}