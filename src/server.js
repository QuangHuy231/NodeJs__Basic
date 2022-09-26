import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api'
// import connection from './configs/connectDB';

require('dotenv').config();


const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));//hổ trợ data từ client -> server
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})