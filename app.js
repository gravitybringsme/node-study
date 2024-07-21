const express = require("express")
const helmet = require("helmet");
const app = express();
const ejs = require("ejs")

app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/public', express.static(__dirname+'/public'));

// Use Helmet!
app.use(helmet());

app.use(express.json()); // post 사용
app.use(express.urlencoded());// post 사용


const mainRouter = require('./router/mainRouter')

app.use('/',mainRouter);

// 3000번 포트
app.listen(3000, function(req,res){
    console.log("서버가 실행되고 있다!")
})