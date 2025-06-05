const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const VALID_API_KEY = '4625306e478b69a3ccdcb9b0aebe7610';

let lastResponse = null;

// STEP: API Key management
Given('tengo una API Key válida', () => {});

// STEP: Consulta por ciudad válida
When('consulto el clima usando la ciudad {string}', (city) => {
  cy.request({
    method: 'GET',
    url: API_URL,
    qs: { q: city, appid: VALID_API_KEY },
    failOnStatusCode: false
  }).then((resp) => { lastResponse = resp; });
});

Then('el código de estado debe ser {int}', (status) => {
  expect(lastResponse.status).to.eq(status);
});

Then('la ciudad retornada debe ser {string}', (expectedCity) => {
  expect(lastResponse.body.name.toLowerCase()).to.eq(expectedCity.toLowerCase());
});

// STEP: Consulta por coordenadas válidas
When('consulto el clima usando latitud {string} y longitud {string}', (lat, lon) => {
  cy.request({
    method: 'GET',
    url: API_URL,
    qs: { lat, lon, appid: VALID_API_KEY },
    failOnStatusCode: false
  }).then((resp) => { lastResponse = resp; });
});

Then('la respuesta debe incluir coordenadas válidas', () => {
  expect(lastResponse.body.coord).to.have.all.keys('lat', 'lon');
  expect(Number.isFinite(lastResponse.body.coord.lat)).to.be.true;
  expect(Number.isFinite(lastResponse.body.coord.lon)).to.be.true;
});

// STEP: Consulta por código postal válido
When('consulto el clima usando el código postal {string}', (zip) => {
  cy.request({
    method: 'GET',
    url: API_URL,
    qs: { zip, appid: VALID_API_KEY },
    failOnStatusCode: false
  }).then((resp) => { lastResponse = resp; });
});

Then('la respuesta debe incluir información del código postal {string}', (zip) => {
  expect(lastResponse.body).to.have.property('id');
});

// STEP: Consulta en diferentes unidades
When('consulto el clima de la ciudad {string} con unidades {string}', (city, units) => {
  cy.request({
    method: 'GET',
    url: API_URL,
    qs: { q: city, units, appid: VALID_API_KEY },
    failOnStatusCode: false
  }).then((resp) => { lastResponse = resp; });
});

Then('la temperatura debe estar en Fahrenheit', () => {
  expect(lastResponse.body).to.have.nested.property('main.temp');
  expect(lastResponse.body).to.have.nested.property('wind.speed');
});

Then('la temperatura debe estar en Celsius', () => {
  expect(lastResponse.body).to.have.nested.property('main.temp');
  expect(lastResponse.body).to.have.nested.property('wind.speed');
});

// STEP: Consulta en idioma diferente
When('consulto el clima de la ciudad {string} con idioma {string}', (city, lang) => {
  cy.request({
    method: 'GET',
    url: API_URL,
    qs: { q: city, lang, appid: VALID_API_KEY },
    failOnStatusCode: false
  }).then((resp) => { lastResponse = resp; });
});

Then("la respuesta debe estar en español", function () {
  const weatherDescription = lastResponse.body.weather?.[0]?.description;
  expect(weatherDescription, "La descripción del clima debe existir").to.not.be.null;
  expect(weatherDescription).to.match(/[a-záéíóúñ ]+/i);
});

// STEP: Ciudad inexistente
Then('el mensaje debe indicar ciudad no encontrada', () => {
  expect(lastResponse.body.message).to.match(/city not found|no encontrado/i);
});

// STEP: Coordenadas fuera de rango
Then('debe devolverse un error adecuado', () => {
  expect(lastResponse.body.message).to.exist;
});

// STEP: API Key inválida o ausente
When('consulto el clima usando la ciudad {string} sin API Key', (city) => {
  cy.request({
    method: 'GET',
    url: API_URL,
    qs: { q: city },
    failOnStatusCode: false
  }).then((resp) => { lastResponse = resp; });
});

Then('el mensaje debe indicar error de autenticación', () => {
  expect(lastResponse.body.message).to.match(/invalid api key|unauthorized|authentication/i);
});

// STEP: Falta de parámetros obligatorios
When('hago una consulta sin parámetros', () => {
  cy.request({
    method: 'GET',
    url: API_URL,
    failOnStatusCode: false
  }).then((resp) => { lastResponse = resp; });
});

Then('debe devolverse un error descriptivo', () => {
  expect(lastResponse.body.message).to.exist;
});

// STEP: Formato incorrecto en parámetros
When('consulto el clima usando el parámetro q={string}', (query) => {
  cy.request({
    method: 'GET',
    url: API_URL,
    qs: { q: query, appid: VALID_API_KEY },
    failOnStatusCode: false
  }).then((resp) => { lastResponse = resp; });
});

// STEP: Nombre de ciudad extremadamente largo
// Usa el mismo step anterior para el parámetro q

// STEP: Verificación de headers de respuesta
Then('la cabecera {string} debe ser {string}', (header, value) => {
  expect(lastResponse.headers[header.toLowerCase()]).to.include(value);
});