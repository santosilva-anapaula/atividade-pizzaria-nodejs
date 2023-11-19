const mongoose = require('mongoose');

const SaborSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    ingredientes: { type: String, required: true },
    tipo: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const Sabor = mongoose.model("sabores", SaborSchema);

module.exports = Sabor;