const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Habilita CORS para tu sitio Wix
app.use(cors({
  origin: [
    'https://walterwaymann.wixsite.com',
    'https://walterwaymann-wixsite-com.filesusr.com'
  ]
}));

// Ruta raíz opcional
app.get('/', (req, res) => {
  res.send('✅ API DOBO funcionando correctamente. Revisa /api/products');
});

// ✅ Ruta para los productos
app.get('https://dobo-api.onrender.com/api/products', (req, res) => {
  res.json([
    { id: 1, nombre: "Maceta DOBO 1", precio: "$5.000" },
    { id: 2, nombre: "Maceta DOBO 2", precio: "$6.500" },
    { id: 3, nombre: "Edición Especial", precio: "$7.200" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
