var express = require('express');
var router = express.Router();
var controller = require('../controllers');


//router.post('/gestionServicio', controller.user.gestionServicio);

//router.get('/listarServicio', controller.servicio.listarServicio);

/*router.get('/', function (req, res, next) {
  res.render('world/inicio', { "url_imagen": urls.url_imagenes, "data": controller.servicio.listarServicios });
});*/

router.get('/', controller.servicio.listarServicios);
router.get('/servicio', controller.servicio.listarServicio);

router.get('/temas', controller.tema_interes.listarTemasInteres);
router.get('/detalle', controller.tema_interes_detalle.visualizarTemaDetalle);
router.get('/detalleTema', controller.tema_interes_detalle.listarTemaDetalle);

router.get('/trabaja', controller.trabaja.listarTrabajaNosotros);

router.get('/linea', controller.recursos_linea.listarRecursosLinea);

router.get('/linea', function (req, res, next) {
  res.render('world/linea', { tema: req.query.id });
});

module.exports = router;
