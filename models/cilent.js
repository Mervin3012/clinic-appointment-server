const mongoose=require('mongoose')
const FoodSchema=new mongoose.Schema({
    clientName:{type:String,required:true},
    description:{type:String,required:true},
})

const Food=mongoose.model('Food',FoodSchema)
module.exports=Food;