const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = (id) => {
    return Carrinho.findById(id);
};

const findAllCarrinhoService = (limit, offset) => {
    return Carrinho.find().limit(limit).skip(offset);
};

const createCarrinhoService = (body) => {
    return Carrinho.create(body);
};

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteCarrinhoService = (id) => {
    return Carrinho.findByIdAndDelete(id);
};

module.exports = {
    findCarrinhoByIdService,
    findAllCarrinhoService,
    createCarrinhoService,
    updateCarrinhoService,
    deleteCarrinhoService
}