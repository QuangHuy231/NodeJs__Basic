import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();
const initWebRoute = (app)=>{
    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.getAboutPage)
    router.get('/detail/user/:ID', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)
    return app.use('/', router);
}
module.exports = initWebRoute;