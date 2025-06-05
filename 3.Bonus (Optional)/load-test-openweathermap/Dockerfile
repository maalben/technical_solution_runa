FROM grafana/k6:latest

COPY ./config /config
COPY ./scripts /scripts

WORKDIR /scripts

CMD ["run", "k6-5min-load-test.js"]