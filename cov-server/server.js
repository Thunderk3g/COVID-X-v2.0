var express = require('express');
var http =require('http');
const { Mongoose } = require('mongoose');
var path = require('path');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var config = require('./config');
var entryRoute = require('./routes/entry.route');
//Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://root:root@nepal-helps-cluster.fx3vc.mongodb.net/nepal-helps?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Jai Bhadrakali");
  });
mongoose.connection.on('error' , err => {
    console.log('Error vayo randi ko baan:' +err);
});
var port = 3000;
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true

}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/entry',entryRoute);
//Set resource Public 
app.use(express.static(__dirname + '/view'));
app.get('/',(req,res)=>{
    // res.send('Hello Node!');
    res.sendFile(path.join(__dirname,'view/index.html'));
 });


var server = http.createServer(app);


server.listen(port,() => {
    console.log('Server is starting =' +port);
});