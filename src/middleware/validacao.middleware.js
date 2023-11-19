const ObjectId = require("mongoose").Types.ObjectId;

const validaUsuario = (req, res, next) => {
    //testa um erro por vez e toma apenas uma decisão por vez
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido`});
    }
    if(!req.body.email){
        return res.status(400).send({ message: `O campo 'email' precisa ser preenchido`});
    }
    if(!req.body.senha){
        return res.status(400).send({ message: `O campo 'senha' precisa ser preenchido`});
    }
    if(!req.body.imagem){
        return res.status(400).send({ message: `O campo 'imagem' precisa ser preenchido`});
    }
    if(req.body.admin == undefined){
        return res.status(400).send({ message: `O campo 'admin' precisa ser preenchido`});
    }

    return next();
};

const validaEndereco = (req, res, next) => {
    let erros = [];

    req.body.map((value, key) => {
        if(!value.rua){
            erros.push(`'${key+1} - rua'`);
        }
        if(!value.numero){
            erros.push(`'${key+1} - numero'`);
        }
        if(!value.CEP){
            erros.push(`'${key+1} - CEP'`);
        }
    });

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }        
    }
};

const validaPizza = (req, res, next) => {
    let erros = []; //var para cumular os erros
    if(!req.body.nome){
        erros.push("nome");
    }
    if(!req.body.tamanho){
        erros.push("tamanho");
    }
    if(!req.body.precoUnitario){
        erros.push("precoUnitario");
    }
    if(!req.body.imagem){
        erros.push("imagem");
    }

    //testando quantos erros temos e tomando decisões em relação a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }        
    }
};

const validaSabor= (req, res, next) => {
    let erros = []; //var para cumular os erros
    if(!req.body.nome){
        erros.push("nome");
    }
    if(!req.body.ingredientes){
        erros.push("ingredientes");
    }
    if(!req.body.tipo){
        erros.push("tipo");
    }

    //testando quantos erros temos e tomando decisões em relação a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }        
    }
};

const validaPedido = (req, res, next) => {
    let erros = [];

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }

    if(!req.body.frete){
        erros.push("frete");
    }

    if(!req.body.concluido == undefined){
        erros.push("concluido");
    }

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }        
    }
};

const validaCarrinho = (req, res, next) => {
    let erros = [];

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }

    if(!req.body.frete){
        erros.push("frete");
    }
    
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }        
    }
};

const validaIdParams = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID que não corresponde aos padroes necessarios`});
    }
};

const valida_IdBody = (req, res, next) => {
    if(ObjectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID que não corresponde aos padroes necessarios`});
    }
};

const validaLogin = (req, res, next) => {
    let erros = [];
    
    if(!req.body.email){
        erros.push("email");
    }

    if(!req.body.senha){
        erros.push("senha");
    }

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }        
    }
};

const validaPizzasCarrinhoPedido = (req, res, next) => {
    let erros = [];

    req.body.pizza.map((value, key) => {
        if(!value._id){
            erros.push(`'${key+1} - _id'`);
        }
        if(!ObjectId.isValid(value._id)){
            erros.push(`'${key+1} - _id - Tipo inválido'`);
        }
        if(!value.quantidade){
            erros.push(`'${key+1} - quantidade'`);
        }
    });

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }        
    }
};

module.exports = {
    validaUsuario,
    validaEndereco,
    validaPizza,
    validaSabor,
    validaPedido,
    validaCarrinho,
    validaIdParams,
    valida_IdBody,
    validaLogin,
    validaPizzasCarrinhoPedido
}