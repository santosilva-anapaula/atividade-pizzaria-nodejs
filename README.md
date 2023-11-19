# atividade-pizzaria-nodejs

API Pizzaria desenvolvida como atividade final do modulo Back-end Development do programa de desenvolvimento Full stack ília-iTalents

Código desenvolvido em JavaScript e banco de dados MongoDB, com padrão de projeto MVC (Model, View, Controller).

### Dependências

* bcrypt
* cors
* dotenv
* express
* jsonwebtoken
* mongoose
* swagger-ui-express

### Documentação Swagger

[http://localhost:3000/docs/api-docs/](http://localhost:3000/docs/api-docs/)

### Instalação

1. Baixe o código;
2. Abra o código no VS code;
3. Abra o terminal e execute o comando `npm install` para instalar as dependências;
4. Execute o programa usando `npm run dev`;
5. Na pasta raiz do projeto, crie o arquivo `.env` e configure as variáveis de ambiente conforme o arquivo `.env.example`.

### Métodos utilizados


| Método  | Descrição                                                                                                                                  |
| ---------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`    | Retorna informação de um ou mais registros. Pode ser usado para recuperar dados de um recurso específico ou de uma coleção de recursos. |
| `POST`   | Envia dados para serem processados a um recurso específico. Geralmente usado para criar novos registros.                                    |
| `PUT`    | Atualiza completamente um registro existente.                                                                                                |
| `PATCH`  | Atualiza parcialmente um registro existente.                                                                                                 |
| `DELETE` | Remove um registro específico.                                                                                                              |

### Respostas do servidor


| Código | Descrição                                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 200     | Indica que a requisição foi executada com sucesso. Não há problemas ou erros, e o servidor retornou os dados solicitados conforme esperado.                                                                        |
| 201     | Informa que a informação foi cadastrada com sucesso. Geralmente utilizado após uma requisição de criação de recurso, indicando que o recurso foi criado com êxito.                                             |
| 400     | Sinaliza que a requisição feita é inválida. Isso pode ocorrer devido a parâmetros ausentes, valores inválidos ou outros problemas na requisição.                                                               |
| 401     | Aponta para um erro de autenticação. Indica que o usuário não foi autenticado corretamente ou que o token de autenticação fornecido é inválido.                                                                |
| 404     | Denota que o registro solicitado não foi encontrado no servidor. Isso pode ocorrer quando os dados fornecidos na requisição não corresponde a nenhum registro existente.                                           |
| 500     | Refere-se a um erro interno no servidor. Este código é geralmente usado quando ocorre um problema não previsto no servidor durante o processamento da requisição. Indica que algo deu errado no lado do servidor. |

### Models

* Usuario
* Pizza
* Sabor
* Carrinho
* Pedido


### Rotas
###### Rotas - Usuario

* /usuario/findAll
* /usuario/findById/:id
* /usuario/create
* /usuario/update/:id
* /usuario/delete/:id
* /usuario/findAll
* /usuario/addAddress/:id
* /usuario/deleteAddress
* /usuario/addPizzaFav/:id
* /usuario/deletePizzaFav/:id



###### Rotas Pizza

- /pizza/findAll
- /pizza/findById/:id
- /pizza/create
- /pizza/update/:id
- /pizza/delete/:id
- /pizza/findAll



###### Rotas Sabor

- /sabor/findAll
- /sabor/findById/:id
- /sabor/create
- /sabor/update/:id
- /sabor/delete/:id
- /sabor/findAll



###### Rotas Carrinho

- /carrinho/findAll
- /carrinho/findById/:id
- /carrinho/create
- /carrinho/update/:id
- /carrinho/delete/:id
- /carrinho/findAll



###### Rotas Pedido

- /pedido/findAll
- /pedido/findById/:id
- /pedido/create
- /pedido/update/:id
- /pedido/delete/:id
- /pedido/findAll
