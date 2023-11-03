const getLatLon = require('./getLatLon');

const start = async () => {
    const latLon = await getLatLon('Chapinero, Bogotá, Colombia');
    console.log(latLon);
}

start();