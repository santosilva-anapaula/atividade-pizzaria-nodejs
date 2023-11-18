const saborService = require("../service/sabor.service");

const findSaborByIdController = async (req, res) => {
    try {
        res.status(200).send(await saborService.findSaborByIdService(req.params.id));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const findAllSaborController = async (req, res) => {
    try {
        res.status(200).send(await saborService.findAllSaborService(req.query.limit, req.query.offset));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const createSaborController= async (req, res) =>{
    try {
        res.status(201).send(await saborService.createSaborService(req.body));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const updateSaborController = async (req, res) =>{
    try {
        res.status(200).send(await saborService.updateSaborService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const deleteSaborController = async (req, res) =>{
    try {
        res.status(200).send(await saborService.deleteSaborService(req.params.id));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

module.exports = {
    findSaborByIdController,
    findAllSaborController,
    createSaborController,
    updateSaborController,
    deleteSaborController
}