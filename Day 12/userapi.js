const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let products =[
    {pId:101, pName:'Mobile', pPrice:10000},
    {pId:102, pName:'Laptop', pPrice:56000},
    {pId:103, pName:'TV', pPrice:180000},
    {pId:104, pName:'Tablet', pPrice:30000},
];

app.get('/products',(req,res) => {
    res.json(products);
});

app.post('/product',(req,res) => {
    const newProduct = {
        pId:req.body.pId,
        pName:req.body.pName,
        pPrice:req.body.pPrice
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const product = products.find(u => u.pId === id);

    if(!product){
        return res.status(404).json({message: "Product not found"});
    }
        product.pName = req.body.pName;
        product.pPrice = req.body.pPrice;
        res.json(product);

    
})

app.delete('/products/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const index = products.findIndex(u => u.pId === id);

    if(index === -1){
        return res.status(404).json({message: "Product not found"});
    }

    const deleteproduct = products.splice(index, 1);
    res.json(deleteproduct);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});