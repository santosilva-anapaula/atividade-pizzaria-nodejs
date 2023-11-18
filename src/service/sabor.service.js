const Sabor = require("../model/Sabor");

const findSaborByIdService = (id) => {
    return Sabor.findById(id);
};

const findAllSaborService = (limit, offset) => {
    return Sabor.find().limit(limit).skip(offset);
};

const createSaborService = (body) =>{
    return Sabor.create(body);
};

const updateSaborService = (id, body) =>{
    return Sabor.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteSaborService = (id) =>{
    return Sabor.findByIdAndDelete(id);
};

module.exports = {
    findSaborByIdService,
    findAllSaborService,
    createSaborService,
    updateSaborService,
    deleteSaborService
}