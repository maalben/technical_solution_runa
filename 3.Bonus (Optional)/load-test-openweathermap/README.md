# 🧪 Prueba de Carga con K6 + Generador de Reportes HTML

Este proyecto ejecuta una prueba de carga a la API de OpenWeatherMap usando K6 y luego genera automáticamente un reporte HTML con Node.js.

---

## 📁 Estructura

- `/config`: Archivos de configuración (URL y API Key)
- `/scripts`: Script de carga para K6
- `/report`: Script Node.js para generar el HTML
- `results.json`: Archivo de resultados generado por K6 (fuera de Docker)
- `Dockerfile`: Imagen para correr K6

---

## 🔧 Requisitos

- Docker
- Node.js (para generar el reporte)
- K6 (opcional si no usas Docker)

---

## 🚀 Instrucciones

### 1. Ejecutar prueba de carga:

```bash
docker build -t k6-load-test-weather .

Luego, intenta ejecutar el siguiente comando:

docker run --rm -v "$(pwd)":/scripts k6-load-test-weather run /scripts/scripts/k6-5min-load-test.js --out json=/scripts/results.json

ó 

docker run --rm -v $(pwd):/scripts k6-load-test-weather run /scripts/scripts/k6-5min-load-test.js --out json=/scripts/results.json
```

> Esto guarda los resultados como `results.json` en tu máquina.

### 2. Generar el reporte HTML:

```bash
cd report
node generateReport.js
```

> El reporte se generará como `report.html` dentro del directorio `/report`.

---

## 📄 Resultado

El archivo `report.html` contendrá:

- Total de solicitudes
- Tasa de éxito/fallo
- p95 response time
- Estado: EXITOSA o FALLIDA