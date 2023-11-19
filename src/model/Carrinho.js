const mongoose = require("mongoose");

const CarrinhoSchema = new mongoose.Schema({
    pizzas:[
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzas" },
            quantidade: { type: Number, required: true }
        },
    ],
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    userId:  { type: mongoose.Schema.Types.ObjectId, required:true, ref: "usuarios" }
});

const Carrinho = mongoose.model("carrinhos", CarrinhoSchema);

module.exports = Carrinho;