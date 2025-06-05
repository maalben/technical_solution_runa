import http from 'k6/http';
import { check } from 'k6';

const url = open('/config/url.txt').trim();
const apiKey = open('/config/apikey.txt').trim();

export const options = {
  vus: 2,
  duration: '10s',
  rps: 190,
  thresholds: {
    http_req_duration: ['p(95)<800'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get(`${url}&appid=${apiKey}`);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response includes "temp"': (r) => r.body.includes('temp'),
  });
}