var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('world/inicio');
});

router.get('/servicios', function(req, res, next) {
  res.render('world/servicios', { tema: req.query.tema });
});

router.get('/temas', function(req, res, next) {
  res.render('world/temas');
});

router.get('/detalle', function(req, res, next) {
  res.render('world/temaDetalle', { tema: req.query.id });
});

router.get('/trabaja', function(req, res, next) {
  res.render('world/trabaja', { tema: req.query.id });
});

router.get('/contabilidad', function(req, res, next) {
  res.render('world/contabilidad', { tema: req.query.id });
});


router.get('/auditorias', function(req, res, next) {
  res.render('world/auditorias', { tema: req.query.id });
});


router.get('/capacitacion', function(req, res, next) {
  res.render('world/capacitacion', { tema: req.query.id });
});


router.get('/impuestos', function(req, res, next) {
  res.render('world/impuestos', { tema: req.query.id });
});

router.get('/nomina', function(req, res, next) {
  res.render('world/nomina', { tema: req.query.id });
});

router.get('/asesoria', function(req, res, next) {
  res.render('world/asesorias', { tema: req.query.id });
});

router.get('/linea', function(req, res, next) {
  res.render('world/linea', { tema: req.query.id });
});

module.exports = router;
