const modo = 'DESARROLLO';

const datos_desarrollo = {
    url_imagenes: "https://adcontur.com"
};

const datos_produccion = {
    url_imagenes: "https://adcontur.com"
};



const datos = modo == 'DESARROLLO' ? datos_desarrollo : modo == 'PRODUCCION' ? datos_produccion : {};
module.exports = datos;