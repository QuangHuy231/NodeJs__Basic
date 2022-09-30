import express from "express";
import APIController from "../controller/APIController";
// import homeController from "../controller/homeController";

let router = express.Router();

const initAPIRoute = (app)=>{
    router.get('/users', APIController.getAllUser)
    router.post('/create-user', APIController.createNewUser) 
    router.put('/update-user', APIController.updateUser) 
    router.delete('/delete-user/:ID', APIController.deleteUser)


    return app.use('/api/v1', router);
}
module.exports = initAPIRoute;