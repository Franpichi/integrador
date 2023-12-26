const axios = require('axios');

// Cambia las URL según sea necesario
const BASE_URL = 'http://localhost:8080/api';

async function testProductRoutes() {
  try {
    console.log('Testing Product Routes...');

    // Prueba de la ruta GET /api/products
    const productsResponse = await axios.get(`${BASE_URL}/products`);
    console.log('GET /api/products:', productsResponse.data);

    // Agrega más pruebas según sea necesario para otras rutas de productos

    console.log('Product Routes Test Completed.\n');
  } catch (error) {
    console.error('Error en las pruebas de productos:', error.message);
  }
}

async function testCartRoutes() {
  try {
    console.log('Testing Cart Routes...');

    // Agrega pruebas para las rutas de carritos

    console.log('Cart Routes Test Completed.\n');
  } catch (error) {
    console.error('Error en las pruebas de carritos:', error.message);
  }
}

// Agrega más funciones de prueba según sea necesario

async function runTests() {
  try {
    // Ejecuta las pruebas
    await testProductRoutes();
    await testCartRoutes();
    // Agrega más llamadas de funciones de prueba según sea necesario

    console.log('All Tests Completed Successfully.');
  } catch (error) {
    console.error('Error en las pruebas generales:', error.message);
  }
}

// Ejecuta todas las pruebas
runTests();
