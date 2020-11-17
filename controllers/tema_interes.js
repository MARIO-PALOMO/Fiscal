var mysql = require("mysql");
var config = require(".././database/database.js");
var urls = require(".././environments/environment.js");
let pool;
const createPool = async () => {
  pool = await mysql.createPool(config);
};

createPool();

module.exports = {

  listarTemasInteres: function (req, res, next) {

    pool.query('SELECT * FROM servicio ORDER BY orden ASC', function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.status(500).send({ 'resultado': 5 });
      } else {
        var result = rows;
        pool.query(`SELECT tema.idTema, tema.titulo, CONCAT(UPPER(MONTHNAME( tema.fecha )),' ', YEAR ( tema.fecha )) AS fechaAbreviada, tipo_tema.nombre FROM tema INNER JOIN tipo_tema ON tema.idTipoTema = tipo_tema.idTipoTema`, function (err2, rows2, fields) {
          if (err2) {
            console.log(err2);
            res.status(500).send({ 'resultado': 5 });
          } else {
            var result2 = rows2;
            res.render('world/temas', { "url_imagen": urls.url_imagenes, "temas": result2, "data": result });
          }
        });
      }
    });

  }

}
