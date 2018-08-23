require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const pc = require('./products_controller');

const app = express();
const port = process.env.PORT || 3002;


app.use(bodyParser.json());


massive( process.env.CONNECTION_STRING )
.then( dbInstace => {           // <-- CREATE INSTACE OF OUR DATABASE AND STORE IT ON APP
  //  console.log('this is my copy of my DB',dbInstace)
  app.set('db',dbInstace)
})
.catch(error => console.log('ERROR', error));


// SET-UP ENDPOINT AND WHEN HIT, IT CALL FUNCTION
app.post('/api/product', pc.create);
app.get('/api/products', pc.getAll);
app.get('/api/product/:id', pc.getOne);
app.put('/api/product/:id', pc.create);
app.delete('/api/product/:id', pc.create);



app.listen(port, () => {
  console.log(`Server is UP and listening on port ${port}.`)
});


