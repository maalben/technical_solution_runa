const fetch = require('node-fetch');
global.fetch = fetch;

const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const WeatherCard = require('./WeatherCard').default;

describe('WeatherCard', () => {
  it('muestra el mensaje de carga al renderizar', async () => {
    render(<WeatherCard city="London" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('London')).toBeInTheDocument();
    expect(await screen.findByText(/°C/)).toBeInTheDocument();
  });
});