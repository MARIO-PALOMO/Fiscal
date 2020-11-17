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
        res.render('world/inicio', { "url_imagen": urls.url_imagenes, "data": result });
      }
    });
  },

  listarServicio: function (req, res, next) {


    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        pool.query('SELECT * FROM servicio WHERE idServicio = ?', [req.query.idServicio], function (err2, rows2, fields) {
          if (err2) {
            console.log(err2);
            res.status(500).send({ 'resultado': 5 });
          } else {
            var result2 = rows2[0];
            res.render('world/servicioDetalle', { "url_imagen": urls.url_imagenes, "servicio": result2, "data": result });
          }
        });
      }
    });

  },

}
