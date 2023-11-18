const router = require("express").Router();

const usuarioController = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.middleware");
const {validaUsuario, validaEndereco, validaIdParams, valida_IdBody} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// Rotas get
router.get('/findById/:id', authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, usuarioController.findAllUsersController);

// Rotas post
router.post('/create', validaUsuario, usuarioController.createUserController);
router.post('/addAddress/:id', authMiddleware, validaIdParams, validaEndereco, usuarioController.addUserAddressController);
router.post('/addPizzaFav/:id', authMiddleware, validaIdParams, valida_IdBody, usuarioController.addUserPizzaFavController);

// Rotas put
router.put('/update/:id', authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

// Rotas delete
router.delete('/delete/:id', authMiddleware, validaIdParams, usuarioController.deleteUserController);
router.delete('/deleteAddress', authMiddleware, usuarioController.deleteUserAddressController);
router.delete('/deletePizzaFav/:id', authMiddleware, validaIdParams, valida_IdBody, usuarioController.deleteUserPizzaFavController);

module.exports = router;