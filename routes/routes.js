var express = require('express');
var router = express.Router();
var controller = require('../controllers');

var multer = require('multer');
var FTPStorage = require('multer-ftp');

var storage = new FTPStorage({
  basepath: '/public_html/archivos',
  ftp: {
    host: 'adcontur.com',
    secure: false,
    user: 'admin@adcontur.com',
    password: 'O9Fn=N5BRYZ*',
    port: 21
  },
  destination: function (req, file, options, callback) {
    callback(null, options.basepath + "/curriculum-" + Date.now() + "-" + file.originalname)
  }
});

var upload = multer({ storage: storage });

router.post('/enviarEmailCurriculum', upload.single('file'), controller.email.enviarEmailCurriculum);

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

router.post('/enviarEmail', controller.email.enviarEmail);

module.exports = router;
