const express = require('express');
const exphbs = require('express-handlebars');


const app= express();
const PORT = process.env.PORT || 3000;


//static files
app.use(express.static('public'));

//template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//body parser middleware 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/users'));


app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });