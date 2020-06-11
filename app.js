var express = require("express");
var app = express();

app.use(express.static("public"));

/**
 * @api {get} /signin Sign In
 * @apiVersion 0.0.2
 * @apiGroup Autenticação
 * @apiDescription API de Sign In de usuário
 * 
 * @apiHeader {string} user Nome do Usuário
 * @apiHeader {string} hashPass Senha Criptografada
 * @apiHeader {Number} [keep=0] Se mantém logado
 * 
 * @apiHeaderExample {json} Request-Example:
 * {
 *    "user": "gk.cleidson@yahoo.com.br",
 *    "hashPass": "402562bbebdabd3dc1c86ad268ab3136aebd1756",
 *     "keep": 1
 * }
 * @apiSuccess {String} status Mensagem de acesso autorizado
 * @apiSuccess {String} token Token de Acesso
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Logado!"
 *      "token": "c447c5b517efa57e04e1a4732b2a3b5df82f9d72"
 *    }
 * 
 * @apiError {String} status Mensagem de acesso negada
 * 
 * @apiErrorExample {json} Error
 *    HTTP/1.1 406 Not Acceptable
 *    {
 *      "status": "Usuário ou Senha incorretos"
 *    }
 *
 */
app.get("/signin", function (req, res) {
  res.json({ status: "Logado!" });
});

/**
 * @apiVersion 0.0.2
 * @api {post} /signup Sign Up
 * @apiGroup Autenticação
 * @apiDescription API de cadastro de novo usuário
 *
 * @apiHeader {string} user Nome do Usuário
 * @apiHeader {string} hashPass Senha Criptografada
 * 
 * @apiHeaderExample {json} Request-Example:
 * {
 *    "user": "gk.cleidson@yahoo.com.br",
 *    "hashPass": "402562bbebdabd3dc1c86ad268ab3136aebd1756",
 * }
 * 
 * @apiSuccess {String} status Mensagem de cadastro efetuado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "status": "Usuário Cadastrado!"
 *    }
 * 
 * @apiError {String} status Mensagem de Cadastro Não Efetivado 
 * 
 * @apiErrorExample {json} Email em Uso
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "status": "Email já utilizado"
 *    }
 *  @apiErrorExample {json} Falta Campo hashPass ou user
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "status": "Faltam Argumentos"
 *    }
 *
 */
app.post("/signup", function (req, res) {
  res.json({ status: "Cadastrado!" });
});

/**
 * @apiVersion 0.0.1
 * @api {delete} /logout Logout
 * @apiGroup Autenticação
 *
 * @apiSuccess {String} status Mensagem de saída do sistema
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Você saiu do sistema!"
 *    }
 *
 */
app.delete("/logout", function (req, res) {
  res.json({ status: "Saindo do sistema!" });
});

/**
 * @apiVersion 0.0.1
 * @api {put} /pagamento/:codigo Pagamento com código de barras
 * @apiGroup Pagamentos
 *
 * @apiSuccess {String} status Mensagem de dados atualizados
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Dados atualizados!"
 *    }
 *
 */
app.put("/pagamento/:codigo", function (req, res) {
  res.json({ status: "Dados atualizados!" });
});


app.listen(3000, function () {
  console.log("Api up and running!");
});