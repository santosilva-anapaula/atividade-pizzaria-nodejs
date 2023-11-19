const Pizza = require("../model/Pizza");

const findPizzaByIdService = (id) => {
    return Pizza.findById(id);
};

const findAllPizzaService = (limit, offset) => {
    return Pizza.find().limit(limit).skip(offset);
};

const createPizzaService = (body) => {
    return Pizza.create(body);
};

const updatePizzaService = (id, body) => {
    return Pizza.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deletePizzaService = (id) => {
    return Pizza.findByIdAndDelete(id);
};

module.exports = {
    findPizzaByIdService,
    findAllPizzaService,
    createPizzaService,
    updatePizzaService,
    deletePizzaService
}