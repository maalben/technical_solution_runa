const fs = require('fs');
const path = require('path');

const resultsPath = path.join(__dirname, '..', 'results.json');
const lines = fs.readFileSync(resultsPath, 'utf-8').split('\n').filter(Boolean);

const metrics = {};
for (const line of lines) {
  try {
    const json = JSON.parse(line);
    if (json.type === 'Point' && json.metric && json.data && json.data.value !== undefined) {
      const name = json.metric;
      if (!metrics[name]) metrics[name] = [];
      metrics[name].push(json.data.value);
    }
  } catch (e) {
    console.error("Error parsing line:", e);
  }
}

// Extraer métricas de interés
const total = metrics["http_reqs"]?.length || 0;
const failures = metrics["http_req_failed"]?.filter(v => v === 1).length || 0;
const success = total - failures;
const durations = metrics["http_req_duration"] || [];
const p95 = durations.length ? durations.sort((a,b)=>a-b)[Math.floor(durations.length*0.95)] : 0;
const errorRate = (failures / total) * 100;
const pass = p95 < 800 && errorRate < 1;

const html = `
<html>
<head>
  <title>Reporte de Carga - K6</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    h1 { color: #333; }
    .pass { color: green; }
    .fail { color: red; }
  </style>
</head>
<body>
  <h1>📊 Reporte de Prueba de Carga - OpenWeatherMap API</h1>
  <ul>
    <li><strong>Solicitudes Totales:</strong> ${total}</li>
    <li><strong>Exitosas:</strong> ${success}</li>
    <li><strong>Fallidas:</strong> ${failures}</li>
    <li><strong>p95:</strong> ${p95.toFixed(2)} ms</li>
    <li><strong>Error rate:</strong> ${errorRate.toFixed(2)}%</li>
  </ul>
  <h2>Resultado Final: <span class="${pass ? 'pass' : 'fail'}">${pass ? 'EXITOSA' : 'FALLIDA'}</span></h2>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'report.html'), html);
console.log("✅ Reporte generado: report/report.html");