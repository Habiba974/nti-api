const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt=require("bcrypt")
const userSchema=mongoose.Schema({
fname:{
    type:String,
    trim:true,
    required:true,
    lowercase:true,
    minLenght:5,
    maxLenght:30

},
lname:{
     type:String,
    trim:true,
    required:true,
    lowercase:true,
    minLenght:5,
    maxLenght:30
},
age:{
    type:Number,
    min:21,
max:60,
required:true
},
email:{
 type:String,
    trim:true,
    required:true,
    lowercase:true,
    minLenght:5,
    maxLenght:30,
 unique:true,
    match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
},
password:{
     type:String,
    trim:true,
    required:true,
    lowercase:true,
    minLenght:5, 
},
status:{type:Boolean,
default:false
},
img:{
    type:String
},
gender:{type:String,
enum:["male","female"]
},
dofBirth:{
    type:Date
},
phone:{type:String,
trim:true,
validate(value){
    if(!validator.isMobilePhone(value,'ar-EG'))
throw new Error('not validate')
},
},
addresss:[{
    addresName:{
 type:String,
    trim:true,
    required:true,
    lowercase:true,
   },


    addrDat:{ type:String,
    trim:true,
    required:true,
    lowercase:true,
    }
}],
},

{ timestamps:true}
   



)
userSchema.pre("save", async function(){
  if(this.isModified("password"))
    this.password=await bcrypt.hash(this.password,14)
})
const userModel=mongoose.model("User", userSchema)
module.exports=userModel

//bcrypt