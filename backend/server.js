const express = require('express');
const cors = require('cors');
const facts = require('./data/data');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
let currentIndex = 0;
const createResponse = (index) => {
    return {
        index: index,
        item: facts[index],      
        total: facts.length       
    };
};

app.get('/item', (req, res) => {
    res.json(createResponse(currentIndex));
});

app.get('/item/next', (req, res) => {
    currentIndex = (currentIndex + 1) % facts.length; 
    res.json(createResponse(currentIndex));
});

app.get('/item/prev', (req, res) => {
    currentIndex = (currentIndex - 1 + facts.length) % facts.length;
    res.json(createResponse(currentIndex));
});

app.get('/item/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < facts.length) {
        currentIndex = id;
        res.json(createResponse(currentIndex));
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});