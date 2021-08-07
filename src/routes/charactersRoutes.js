const express = require("express");
const controller = require("../controllers/charactersControllers");

const router = express.Router();

router.get("/home", controller.getHome);
router.get("/characters", controller.getAllCharacters);
router.get("/characters/:id", controller.getCharacterById);
router.post("/characters/add", controller.postNewCharacter);
router.post("/characters/add/category", controller.postNewCategory);


module.exports = router;