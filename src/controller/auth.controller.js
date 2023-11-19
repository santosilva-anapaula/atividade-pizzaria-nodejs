const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
    // Extrai as informações de email e senha do corpo da requisição
    const {email, senha} = req.body;

    // Chama a função para buscar o usuário pelo email
    const user = await authService.loginService(email);

    if(!user){
        return res.status(400).send({ message: "Usuario não encontrado!"});
    }

    // Compara a senha fornecida com a senha armazenada no banco de dados
    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    // Verifica se a senha não é válida
    if(!isPasswordValid){
        console.log(senha, user.senha);
        return res.status(400).send({ message: "Senha inválida"});
    }

    // Gera um token JWT com base no ID do usuário
    const token = authService.generateToken(user.id);

    res.status(200).send({
        email,
        token
    });
}

module.exports = { loginController };