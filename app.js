const express=require('express');
const path=require('path');
const userRoutes=require('./routes/userRoutes');

const populate = require('./db/populatedb');

const app=express();
const port=3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/', userRoutes);
populate().then(() => {
  console.log("Database populated.");
}).catch((err) => {
  console.error("Error populating DB:", err);
});

app.listen(port, ()=>{
    console.log("server running");
});


