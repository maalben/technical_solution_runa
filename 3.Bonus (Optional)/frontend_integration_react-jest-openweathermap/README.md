# ✅ React + Jest + OpenWeatherMap API - WeatherCard Testing (Versión Final)

Este proyecto prueba el componente React `WeatherCard`, que consume datos **reales** desde la API de [OpenWeatherMap](https://openweathermap.org/api), usando **Jest** y **React Testing Library**.

---

## 🧪 ¿Qué se valida en la prueba?

- Se renderiza correctamente el componente
- Muestra `Loading...` mientras espera la respuesta
- Consume la API real (con tu API key)
- Muestra el nombre de la ciudad y la temperatura

---

## ⚙️ Requisitos

- Node.js >= 18
- Acceso a internet

---

## 🚀 Instalación

```bash
npm install
npm install --save-dev jest-environment-jsdom node-fetch@2
```

---

## ▶️ Ejecución

```bash
npm test
```

Este comando incluye:

```json
"test": "NODE_OPTIONS=--no-deprecation jest"
```

para evitar los warnings molestos.

---

## 🧱 Estructura del proyecto

```
react-jest-weather-final/
├── src/
│   ├── WeatherCard.jsx
│   └── WeatherCard.test.jsx
├── babel.config.js
├── package.json
└── README.md
```

---

## ✅ Resultado esperado

```
PASS  src/WeatherCard.test.jsx
✓ muestra el mensaje de carga al renderizar
```

---

## 🌦️ API usada

- URL: `https://api.openweathermap.org/data/2.5/weather`
- API Key: `4625306e478b69a3ccdcb9b0aebe7610`

---

## ✅ Final

Este proyecto está listo para entrega o despliegue en GitHub.