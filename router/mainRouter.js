const express = require("express")
const router = express.Router();

router.get("/", function(req,res){
    // res.send('hello, world')

    // let query = req.query;
    // console.log("[QUERY]")
    // console.log(query);
    // res.send({"key":"Value"})

    res.render('index', {title:"EJS 메인페이지"})
})

router.get("/about", function(req,res){
    res.send('About Page')
})

router.post("/postapi", function(req,res){
    let body = req.body;
    console.log("[POST]");
    console.log(body);
    res.send('POST API.. my test')
})


module.exports = router