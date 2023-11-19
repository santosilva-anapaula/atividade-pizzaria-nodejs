const pizzaService = require("../service/pizza.service");

const findPizzaByIdController = async (req, res) => {
    try {
        res.send(await pizzaService.findPizzaByIdService(req.params.id));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const findAllPizzaController = async (req, res) => {
    try {
        res.send(await pizzaService.findAllPizzaService(req.query.limit, req.query.offset));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const createPizzaController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId,
        }

        res.status(201).send(await pizzaService.createPizzaService(corpo));

    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const updatePizzaController = async (req, res) => {
    try {
        res.send(await pizzaService.updatePizzaService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const deletePizzaController = async (req, res) => {
    try {
        res.send(await pizzaService.deletePizzaService(req.params.id));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

module.exports = {
    findPizzaByIdController,
    findAllPizzaController,
    createPizzaController,
    updatePizzaController,
    deletePizzaController
}