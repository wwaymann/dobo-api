const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Habilita CORS para ambos orígenes posibles de Wix
app.use(cors({
  origin: [
    'https://walterwaymann.wixsite.com',
    'https://walterwaymann-wixsite-com.filesusr.com'
  ]
}));

// Ruta raíz (opcional)
app.get('/', (req, res) => {
  res.send('✅ API DOBO funcionando correctamente. Visita /api/products');
});

// Ruta que entrega los productos
app.get('/api/products', (req, res) => {
  const productos = [
    { _id: "1", id: 1, nombre: "Maceta DOBO 1", precio: "$5.000" },
    { _id: "2", id: 2, nombre: "Maceta DOBO 2", precio: "$6.500" },
    { _id: "3", id: 3, nombre: "Edición Especial", precio: "$7.200" }
  ];

  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor API DOBO corriendo en puerto ${PORT}`);
});


