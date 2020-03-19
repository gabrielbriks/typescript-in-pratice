"use strict";
exports.__esModule = true;
/* Ao converter o nosso ts para js, inicialmente deu um erro, porque, quando temos uma propriedade
    que possuí o "export default", durante a conversao para js o 'tsc' nao cosegue encontrar isso,
    e acaba tentando realizar a importação desse "default".
    Diante disso, por isso utilizamos essa nomenclatura ao importar a lib.
*/
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    return res.send('Hello World');
});
app.listen(3333);
