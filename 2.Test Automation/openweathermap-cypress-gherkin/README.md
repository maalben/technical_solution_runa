# ☀️ OpenWeatherMap API Testing con Cypress + Cucumber

Este proyecto automatiza las pruebas E2E de la API de *Current Weather Data* usando Cypress y Gherkin (Cucumber). Cada escenario está descrito en lenguaje natural para fácil comprensión y mantenimiento.

---

## 📦 Herramientas necesarias

- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/) (incluido con Node)
- (Opcional) [Git](https://git-scm.com/)

---

## 🚀 Instalación

1. Clona este repositorio o descomprime el archivo zip:

    ```bash
    git clone https://github.com/tu-usuario/openweathermap-cypress-gherkin.git
    cd openweathermap-cypress-gherkin
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

---

## 🧪 Ejecución de pruebas

- **Para ejecutar las pruebas en modo headless:**

    ```bash
    npx cypress run
    ```

- **Para verlas en modo interactivo (UI):**

    ```bash
    npx cypress open
    ```

- **Reporte de Cucumber (formato HTML, opcional):**
    - Ver documentación de [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor).

---

## ⚙️ Estructura y scripts

- `cypress/e2e/features/weather-api.feature`: escenarios en lenguaje Gherkin.
- `cypress/e2e/step_definitions/weather-api.steps.js`: implementación paso a paso en JavaScript.
- `cypress.config.js`: configuración base de Cypress.
- `package.json`: scripts y dependencias.

---

## 🔑 API Key

Este proyecto utiliza la API Key pública:
`4625306e478b69a3ccdcb9b0aebe7610`
(Recuerda cambiar por una propia si OpenWeatherMap lo solicita).

---

## 📄 Referencias

- [Cypress Docs](https://docs.cypress.io/)
- [Cucumber for Cypress](https://github.com/badeball/cypress-cucumber-preprocessor)
- [OpenWeatherMap API Docs](https://openweathermap.org/current)