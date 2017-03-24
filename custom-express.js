var express = require('express');
var load = require("express-load");

module.exports = function() {
    
    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('./public'));
    
    // ---- Substituido
    // require('./routes/produtos')(app);
    // Carrega todos os arquivos .js sob o diretório indicado
    load('routes')
    // Carrega todos os arquivos .js sob o diretório indicado
        .then('infra')
    // Joga no 'app'
        .into(app);
    
    return app;
} 