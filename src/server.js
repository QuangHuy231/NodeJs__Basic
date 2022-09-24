import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
// import connection from './configs/connectDB';

require('dotenv').config();


const app = express();
const port = process.env.PORT || 8080;


configViewEngine(app);
initWebRoute(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})