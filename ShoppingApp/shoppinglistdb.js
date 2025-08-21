const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
 
const app = express();
app.use(bodyParser.json());


app.use(cors());

 
// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
 
// Database and collection
let db, productCollection;
 
async function connectDB() {
  try {
    await client.connect();
    db = client.db('shoppingdb');
    productCollection = db.collection('productList');
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ DB connection failed", error);
  }
}
connectDB();
 
// CREATE - Add new product
app.post('/products', async (req, res) => {
  try {
    const result = await productCollection.insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
// READ - Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await productCollection.find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
// READ - Get single product by ID
app.get('/products/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id); // _id is a number
    const product = await productCollection.findOne({ _id: id });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
// UPDATE - Update product by ID
app.put('/products/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await productCollection.updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
// DELETE - Remove product by ID
app.delete('/products/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await productCollection.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
// Start server
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
 