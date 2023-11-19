const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    tamanho: { type: String, required: true },
    precoUnitario: { type: Number, required: true },
    imagem: { type: String, required: true },
    sabor:{
        _id: { type: mongoose.Schema.Types.ObjectId, unique: true, required: true, ref: "sabores" }
    },
    createdAt: { type: Date, required: true, default: Date.now() }
});

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;