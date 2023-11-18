const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
    pizzas:[
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzas" },
            quantidade: { type: Number, required: true }
        },
    ],
    createAt: { type: Date, required: true, default: Date.now() },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId:  { type: mongoose.Schema.Types.ObjectId, required:true, ref: "usuarios" },
    concluido: { type: Boolean, required: true }
});

const Pedido = mongoose.model("pedidos", PedidoSchema);

module.exports = Pedido;