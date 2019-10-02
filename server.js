const express=require("express");
const path=require("path");



const Home = require('./routes/Home');
const PORT =3000;

const app=express();

app.set("views","views");
app.set("view engine","pug");

app.use(express.static(path.join(__dirname,"public")));

app.use(Home);

app.listen(PORT);