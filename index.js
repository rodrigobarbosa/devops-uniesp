const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá! Sua aplicação está rodando em um container Docker via Jenkins.');
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
