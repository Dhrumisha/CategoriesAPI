const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");

router.get("/allCategories",categoryController.getAllCategories);
router.get("/getCategoryById/:id",categoryController.getCategory);
router.post("/createCategory",categoryController.createCategory);
router.patch("/updateCategoryById/:id",categoryController.updateCategory);
router.delete("/deleteCategoryById/:id",categoryController.getAllCategories);

module.exports = router;