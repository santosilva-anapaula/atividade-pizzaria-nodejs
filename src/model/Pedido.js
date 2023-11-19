const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
    pizzas:[
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzas" },
            quantidade: { type: Number, required: true }
        },
    ],
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    userId:  { type: mongoose.Schema.Types.ObjectId, required:true, ref: "usuarios" },
    concluido: { type: Boolean, required: true }
});

const Pedido = mongoose.model("pedidos", PedidoSchema);

module.exports = Pedido;