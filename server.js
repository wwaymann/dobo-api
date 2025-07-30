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
    {
      _id: "1",
      nombre: "Maceta DOBO 1",
      precio: "$5.000",
      imagen: "https://static.wixstatic.com/media/a36313_7412457b195f4a7689ccfe42d1308137~mv2.jpg"
    },
    {
      _id: "2",
      nombre: "Maceta DOBO 2",
      precio: "$6.500",
      imagen: "https://static.wixstatic.com/media/a36313_a724e9942ef9448094c2a8019ac55220~mv2.png"
    },
    {
      _id: "3",
      nombre: "Edición Especial",
      precio: "$7.200",
      imagen: "https://static.wixstatic.com/media/a36313_6b0af97dcc4e4128bc5e4cbc59cbb0b0~mv2.jpg"
    }
  ];

  res.json(productos);
});



app.listen(PORT, () => {
  console.log(`Servidor API DOBO corriendo en puerto ${PORT}`);
});


