const router = require("express").Router();

const pizzaController = require("../controller/pizza.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validaPizza, validaIdParams, valida_IdBody } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

//rotas get
router.get("/findById/:id", authMiddleware, validaIdParams, pizzaController.findPizzaByIdController);
router.get("/findAll", authMiddleware, paginacao, pizzaController.findAllPizzaController);

//rotas post
router.post("/create", authMiddleware, validaPizza, pizzaController.createPizzaController);

//rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaPizza, pizzaController.updatePizzaController);

//rotas delete
router.delete("/delete/:id", authMiddleware, validaIdParams, pizzaController.deletePizzaController);

module.exports = router;