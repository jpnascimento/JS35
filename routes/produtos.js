//var connectionFactory = require('../infra/connectionFactory');
//var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app) { 
    app.get('/produtos', function(req, res) {
        
        // --- Substituido
        //var connection = connectionFactory();
        var connection = app.infra.connectionFactory();
        
        // --- Substituido
        //var produtoDao = new ProdutoDao(connection);
        var produtoDao = new app.infra.ProdutoDao(connection);
        
        produtoDao.lista(function(erro, resultados) {
            if (erro) { 
                console.error(erro);
            }
            res.render('produtos/lista', { livros : resultados });
        });
        
    });
    
}