// const express  = require('express')
// const db = require('./db/connect')
// const Pizza = require('./models/pizzaModel')
// const cors = require('cors')


// const pizzasRoute = require('./routes/pizzaRoute')
// const app =express();

// app.use(express.json());
// app.use(cors());


// const port = 9000;

// app.use('/api/pizzas/',pizzasRoute)


// app.get('/', (req,res)=>{
//    res.send("Hello world")
// })


// app.listen(port,() => console.log(`example app listening on port ${port}`));

const express = require('express');
const db = require('./db/connect');
const cors = require('cors');

const pizzasRoute = require('./routes/pizzaRoute');
const app = express();

app.use(express.json());
app.use(cors());

const port = 9001;

app.use('/api/pizzas', pizzasRoute);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
