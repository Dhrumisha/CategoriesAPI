const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "A Category has name required"],
        unique:true,
    },
    description:{
        type:String,
        required:[true,"A Category has description required"],
    },
    status:{
        type:String,
        required:[true,"A Category has status required"],
    },
    price:{
        type:Number,
        required:[true,"A Category has price"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },

})

const Category = mongoose.model("category",categorySchema);

module.exports = Category