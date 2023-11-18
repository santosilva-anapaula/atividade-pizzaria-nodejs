const router = require("express").Router();

const saborController = require("../controller/sabor.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validaSabor, validaIdParams } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/findById/:id", authMiddleware, validaIdParams, saborController.findSaborByIdController);
router.get("/findAll", authMiddleware, paginacao, saborController.findAllSaborController);

router.post("/create", authMiddleware, validaSabor, saborController.createSaborController);

router.put("/update/:id", authMiddleware, validaIdParams, validaSabor, saborController.updateSaborController);

router.delete("/delete/:id", authMiddleware, validaIdParams, saborController.deleteSaborController);

module.exports = router;