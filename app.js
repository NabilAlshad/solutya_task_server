const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");

const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const AdminRoute=require('./src/Route/AdminRoute/AdminRoute');
const EditorRoute=require('./src/Route/EditorRoute/EditorRoute');


const app=express();
app.use(express.json());
app.use(cors())
dotenv.config();
const URL_MONGO=process.env.mongo_url;
const PORT=process.env.PORT;
console.log(URL_MONGO);

mongoose
  .connect(URL_MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log(`Data base connected`))
  .catch((err) => console.log(err));


  app.use('/admin',AdminRoute);
  app.use('/editor',EditorRoute)

  const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({ error: err });
  };
  
  app.use(errorHandler);
  
  app.listen(PORT||2900, () => {
    console.log(`connected to the port ${PORT}`)
  });