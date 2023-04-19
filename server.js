const express = require('express');
const cors = require('cors');

const app = express();

const tasks = [
    {
      id: 1,
      description: 'Comprar leche',
      completed: false,
    },
    {
      id: 2,
      description: 'Pasear al perro',
      completed: true,
    },
    {
      id: 3,
      description: 'Hacer la compra semanal',
      completed: false,
    },
  ];

app.use(cors());

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});