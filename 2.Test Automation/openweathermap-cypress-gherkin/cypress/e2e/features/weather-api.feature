Feature: Pruebas E2E sobre la API de OpenWeatherMap

  Scenario: Consulta por ciudad válida
    Given tengo una API Key válida
    When consulto el clima usando la ciudad "London"
    Then el código de estado debe ser 200
    And la ciudad retornada debe ser "London"

  Scenario: Consulta por coordenadas válidas
    When consulto el clima usando latitud "40.71" y longitud "-74.01"
    Then el código de estado debe ser 200
    And la respuesta debe incluir coordenadas válidas

  Scenario: Consulta por código postal válido
    When consulto el clima usando el código postal "94040,us"
    Then el código de estado debe ser 200
    And la respuesta debe incluir información del código postal "94040,us"

  Scenario: Consulta en diferentes unidades
    When consulto el clima de la ciudad "London" con unidades "imperial"
    Then el código de estado debe ser 200
    And la temperatura debe estar en Fahrenheit

    When consulto el clima de la ciudad "London" con unidades "metric"
    Then el código de estado debe ser 200
    And la temperatura debe estar en Celsius

  Scenario: Consulta en idioma diferente
    When consulto el clima de la ciudad "London" con idioma "es"
    Then el código de estado debe ser 200
    And la respuesta debe estar en español

  Scenario: Ciudad inexistente
    When consulto el clima usando la ciudad "NoExisteCiudad"
    Then el código de estado debe ser 404
    And el mensaje debe indicar ciudad no encontrada

  Scenario: Coordenadas fuera de rango
    When consulto el clima usando latitud "999" y longitud "999"
    Then el código de estado debe ser 400
    And debe devolverse un error adecuado

  Scenario: API Key inválida o ausente
    When consulto el clima usando la ciudad "London" sin API Key
    Then el código de estado debe ser 401
    And el mensaje debe indicar error de autenticación

  Scenario: Falta de parámetros obligatorios
    When hago una consulta sin parámetros
    Then el código de estado debe ser 401
    And debe devolverse un error descriptivo

  Scenario: Formato incorrecto en parámetros
    When consulto el clima usando el parámetro q="12345!@#"
    Then el código de estado debe ser 404
    And debe devolverse un error adecuado

  Scenario: Nombre de ciudad extremadamente largo
    When consulto el clima usando el parámetro q="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    Then el código de estado debe ser 404
    And debe devolverse un error adecuado

  Scenario: Verificación de headers de respuesta
    When consulto el clima usando la ciudad "London"
    Then la cabecera "content-type" debe ser "application/json"