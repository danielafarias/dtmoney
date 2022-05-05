import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Veterinário',
          type: 'withdraw',
          category: 'Lupita',
          amount: 150,
          createdAt: new Date('2022-04-04 10:00:00'),
        },
        {
          id: 2,
          title: 'Freelance',
          type: 'deposit',
          category: 'Trabalho',
          amount: 1500,
          createdAt: new Date('2022-05-10 10:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

