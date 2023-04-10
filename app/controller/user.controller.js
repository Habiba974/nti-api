const userModel=require("../../database/model/user.model")
const Helper=require('../helper')
class User{
static register= async(req,res)=>{
    try{
        const userData=new userModel(req.body)
        await userData.save()
        // res.status(200).send({
        //     apiStatus:true,
        //     data:userData,
        //     message:"user added "
        
        // })
        Helper.resHandler(res,200,true,userData,"user add")
    }catch(e){
    //     res.status(500).send({
    //         apiStatus:false,
    //         data:userData,
    //         message:"user added "
    // })
    Helper.resHandler(res,500,false,e.message,"error")
}
}

static all = async(req,res)=>{
        try{
            const userData = await userModel.find()
            Helper.resHandler(res, 200, true, userData, "users featched")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }

    static single=async(req,res)=>{
        try{
              const userData = await userModel.findById(req.params.id)
            Helper.resHandler(res, 200, true, userData, "users ") 
        }catch(e){
             Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }

static del = async(req,res)=>{
        try{
            const userData= await userModel.findByIdAndRemove(req.params.id)
                       Helper.resHandler(res, 200, true, userData, "users featched") 

        }
        catch(e){
             Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }

    static delAll = async(req,res)=>{
        try{
            const d = await userModel.deleteMany()
                       Helper.resHandler(res, 200, true,{}, "All delet ") 

        }
        catch(e){
             Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }




}
module.exports=User