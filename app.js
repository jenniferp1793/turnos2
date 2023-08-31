const express = require('express');
const app = express();

// Importar los controladores
const ticketController = require('./controllers/ticketController');
const escritorioController = require('./controllers/escritorioController');

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Usar los controladores en las rutas correspondientes
app.use('/api/tickets', ticketController);
app.use('/api/escritorios', escritorioController);

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
