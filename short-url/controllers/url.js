
const shortid= require("shortid")

const URL = require("../models/url");
async function handleGenerateNewShortUrl(req, res){
    if(!body.url) return res.status(400).json({
        error : "URL is required"
    })
    const body=  req.body;
    const ShortID = shortid();
    await URL.create({
        ShortId: ShortID,
        redirectURL: body.url,
        visitHistory:[],
    });

    return res.json({
        id: ShortID
    });
}

module.exports ={
    handleGenerateNewShortUrl,
}