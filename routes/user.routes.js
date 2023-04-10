const router =require("express").Router()
const userController=require('../app/controller/user.controller')
router.post("/register",userController.register)
router.get("/",userController.all)
router.get("/single/:id",userController.single)
router.get("/del/:id",userController.del)
router.get("/delAll",userController.delAll)
module.exports= router