# 🌦️ OpenWeatherMap E2E Testing with Playwright

Este proyecto contiene una prueba End-to-End (E2E) para automatizar la búsqueda de clima de una ciudad en [OpenWeatherMap](https://openweathermap.org) utilizando [Playwright](https://playwright.dev/).

---

## 🚀 Requisitos

- **Node.js** v18 o superior ([descargar aquí](https://nodejs.org/))
- **npm** (incluido con Node.js)
- **Git** (opcional, para clonar el repositorio)

---

## 🛠️ Instalación

1. **Clona el repositorio** o descarga el proyecto:

   ```bash
   git clone https://github.com/tu-usuario/openweathermap-e2e-playwright.git
   cd openweathermap-e2e-playwright
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **(Solo la primera vez)** Instala los navegadores soportados por Playwright:

   ```bash
   npx playwright install
   ```

---

## ⚙️ Configuración importante

El archivo `playwright.config.ts` ya está configurado para:
- Ejecutar en modo visual (`headless: false`) para ver las pruebas en tiempo real.
- Generar reporte HTML de los resultados de la prueba.
- Guardar capturas y video solo si la prueba falla.

---

## ▶️ Ejecución de la prueba

### 1. Ejecuta la prueba en modo visual:

   ```bash
   npx playwright test
   ```

   Se abrirá el navegador y verás la automatización paso a paso.

### 2. Abre el reporte HTML generado:

   ```bash
   npx playwright show-report
   ```

   Se abrirá un reporte interactivo en tu navegador, con detalles, capturas y videos (si hubo fallos).
   El reporte se encuentra en la carpeta `playwright-report`.

---

## 🧑‍💻 Modificación de la prueba

- Edita el archivo de pruebas (por ejemplo: `tests/weather-search.spec.ts`) para cambiar ciudades, agregar pasos o adaptar escenarios.

---

## 💡 Consejos útiles

- Puedes ejecutar en diferentes navegadores editando el archivo `playwright.config.ts` ([ver documentación](https://playwright.dev/docs/browsers)).
- Para guardar videos y capturas de pantalla de **todas** las ejecuciones (no solo en fallos), puedes cambiar la configuración en el archivo mencionado.

---

## 🏁 Scripts útiles

| Comando                        | Descripción                        |
|--------------------------------|------------------------------------|
| `npx playwright test`          | Ejecuta las pruebas E2E            |
| `npx playwright test --headed` | Fuerza ejecución en modo visual    |
| `npx playwright show-report`   | Abre el reporte HTML interactivo   |
| `npx playwright codegen <url>` | Abre asistente de grabación de test|

---

## 📂 Estructura

```
.
├── tests/
│   └── weather-search.spec.ts   # Prueba E2E
├── playwright.config.ts         # Configuración Playwright
├── package.json
└── README.md
```

---

## 📝 Referencias

- [Documentación oficial de Playwright](https://playwright.dev/)
- [OpenWeatherMap](https://openweathermap.org)