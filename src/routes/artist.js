const express = require("express");
const artistController = require("../controllers/artist");
const albumController = require("../controllers/album");

const router = express.Router();

router.post("/", artistController.create);

router.get("/", artistController.read);

router.get("/:artistId", artistController.readById);

router.patch("/:artistId", artistController.update);

router.delete("/:artistId", artistController.delete);

router.post("/:artistId/album", albumController.create);

module.exports = router;
