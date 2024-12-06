const Category = require("../model/categoriesModel")

exports.getAllCategories = async(req,res)=>{
    try {

        const queryObj = {...req.query};
        const excludedField = ["page","sort","limit","fields"];
        excludedField.forEach(el=>delete queryObj[el]);

        const category = await Category.find(queryObj);
        res.status(200).json({
            status: "SUCCESS",
            result:category.length,
            data: {
              categories: category,
            },
          });
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            message:"Invalid Data"
        })
    }
}

exports.getCategory = async(req,res)=>{
    try {
        const categories = await Category.findById(req.params.id);
        res.status(200).json({
            status: "SUCCESS",
            result:categories.length,
            data: {
              categories: categories,
            },
          });
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            message:"Invalid Data"
        })
    }
}

exports.createCategory = async(req,res)=>{
    try {
        const newCategories = await Category.create(req.body);
        res.status(200).json({
            status: "SUCCESS",
            data: {
              categories: newCategories,
            },
          });
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            message:error
        })
    }
}

exports.updateCategory = async(req,res)=>{
    try {
        const category = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true,});
        res.status(200).json({
            status: "SUCCESS",
            data: {
                categories: category,
            },
          });
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            message:error
        })
    }
}

exports.deleteCategory = async(req,res)=>{
    try {
        const category = await Category.findByIdAndDelete(req.params.id,req.body);
        res.status(200).json({
            status: "SUCCESS",
            data: {
                categories: category,
            },
          });
    } catch (error) {
        res.status(404).json({
            status:"Fail",
            message:error
        })
    }
}