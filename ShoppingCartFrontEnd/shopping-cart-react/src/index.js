import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`)
  }
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`)
  }
}

function swimmerAndFlyerCreator(name) {
  const monster = { name: name }
  return {
    ...swimmer(monster),
    ...flyer(monster)
  }
}

const obj = swimmerAndFlyerCreator('Monsters')
obj.fly()
obj.swim()