const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    tamanho: { type: String, required: true },
    precoUnitario: { type: Number, required: true },
    imagem: { type: String, required: true },
    sabores: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "sabores" },
            createAt: { type: Date, required: true, default: Date.now() }
        }
    ]
});

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;