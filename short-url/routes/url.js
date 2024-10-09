const express = require ("express");
const { handleGenerateNewShortUrl } = require("../controllers/url")
const router = express.Router();

router.post("/URL", handleGenerateNewShortUrl);

module.exports = router
