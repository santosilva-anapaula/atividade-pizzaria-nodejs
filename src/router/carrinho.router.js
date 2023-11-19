const router = require("express").Router();

const carrinhoController = require("../controller/carrinho.controller");

const authMiddleware = require ("../middleware/auth.middleware");
const { validaCarrinho, validaIdParams, validaPizzasCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/findById/:id", authMiddleware, validaIdParams, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhoController);

router.post("/create", authMiddleware, validaPizzasCarrinhoPedido, validaCarrinho, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, validaIdParams, validaCarrinho, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, validaIdParams, carrinhoController.deleteCarrinhoController);

module.exports = router;