const router = require("express").Router();

const pedidoController = require("../controller/pedido.controller");

const authMiddleware = require ("../middleware/auth.middleware");
const { validaPedido, validaIdParams, validaPizzasCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/findById/:id", authMiddleware, validaIdParams, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidoController);

router.post("/create", authMiddleware, validaPizzasCarrinhoPedido, validaPedido, pedidoController.createPedidoController);

router.delete("/delete/:id", authMiddleware, validaIdParams, pedidoController.deletePedidoController);

router.patch("/updateStatus/:id", authMiddleware, validaIdParams, pedidoController.updateStatusPedidoController);

module.exports = router;