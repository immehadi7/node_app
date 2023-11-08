const express = require('express');
const app = express();
const port = 5500;
const cors = require('cors');

app.use(cors());

const products = ['apple', 'bmw', 'camal'];

app.get('/products/:id', (req, res) => {
    // let userId = req.params.id;
    // if (userId >= 0 && userId < products.length) {
    //     let name = products[userId];
    //     res.json({ name }); // Sending a JSON response
    // } else {
    //     res.status(404).json({ error: 'Product not found' }); // Handle invalid product IDs
    // }
    console.log(products)
});

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
