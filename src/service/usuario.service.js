const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findAllUserService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
};

const createUserService = (body) => {
    return Usuario.create(body);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
};

const addUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push:{
                enderecos: endereco,
            }
        },
        {
            rawResult: true,
        }
    );
};

const deleteUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull:{
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            rawResult: true,
        }
    );
};

const addUserPizzaFavService = (id, pizza) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                pizzas_fav:{
                    _id: pizza._id,
                }
            }
        },
        {
            rawResult: true,
        }
    );
};

const deleteUserPizzaFavService = (id, pizza) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                pizzas_fav:{
                    _id: pizza._id,
                }
            }
        },
        {
            rawResult: true,
        }
    );
};

module.exports = {
    findUserByIdService,
    findAllUserService,
    createUserService,
    updateUserService,
    deleteUserService,
    addUserAddressService,
    deleteUserAddressService,
    addUserPizzaFavService,
    deleteUserPizzaFavService
}