const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Construção do modelo de dados
const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    enderecos: [
        {
            rua: { type: String, required: true },
            numero: { type: Number, required: true },
            complemento: { type: String, required: false },
            CEP: { type: String, required: true },
            createdAt: { type: Date, required: true, default: Date.now() },
        }
    ],
    pizzas_fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: "pizzas" },
            createdAt: { type: Date, default: Date.now() },
        }
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    admin: { type: Boolean, required: true, default: false }
});

// Middleware executado antes de salvar um documento Usuario no MongoDB
UsuarioSchema.pre("save", async function(next) {
    // Verifica se a senha está presente para evitar erro caso contrário
    if(this.senha){
        // Embaralha a senha utilizando bcrypt, 10 indica o número de vezes a ser embaralhado
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;