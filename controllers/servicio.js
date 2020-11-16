var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
let pool;
const createPool = async () => {
    pool = await mysql.createPool(config);
};

createPool();

module.exports = {

    listarServicios: function (req, res, next) {

        pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.status(500).send({ 'resultado': 5 });
            } else {
                var result = rows;
                //res.status(200).send({ 'resultado': result });
                res.render('world/inicio', { "url_imagen": urls.url_imagenes, "data": result });
            }

        });
        //pool.end();
    },

    listarServicio: function (req, res, next) {

        pool.query('SELECT * FROM servicio WHERE idServicio = ?', [req.params.id], function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.status(500).send({ 'resultado': 5 });
            } else {
                var result = rows[0];

                res.render('world/servicios', { data: req.query.tema });

            }

        });
        //pool.end();
    },

}
