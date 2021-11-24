const express = require("express");
const app = express();
const User = require("./usesr");
const mongoose = require("mongoose");
var cors = require('cors')

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello assignment");
});

app.use(express.json());
const uri = `mongodb+srv://assignment:eqa2GIKTt0XgGhXI@cluster0.bwbvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


app.post("/addUser", async (req, res) => {
  const user = await new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    email: req.body.email,
    contuct: req.body.contuct,
    address: req.body.address,
  });
  user.save()
  .then((result) => res.json(result));
});


app.get('/users' , (req,res) => {
    User.find({}, function(err, result) {
        if (err) {
          res.json(err);
        } else {
          res.send(result);
        }
    }) 
})

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("server is connectid"));




app.listen(port, () => {
  console.log("server is running at port", port);
});
