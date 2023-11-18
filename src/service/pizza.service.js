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

const addSaborPizzaService = (id, sabor) => {
    return Pizza.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                sabores: {
                    _id: sabor._id,
                    createdAt: sabor.createdAt
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

const deleteSaborPizzaService = (id, sabor) => {
    return Pizza.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                sabores: {
                    _id: sabor._id,
                },
            },
        },
        {
            rawResult: true,
        },
    );
};

module.exports = {
    findPizzaByIdService,
    findAllPizzaService,
    createPizzaService,
    updatePizzaService,
    deletePizzaService,
    addSaborPizzaService,
    deleteSaborPizzaService
}