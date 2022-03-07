
const express = require("express");

const app = express();

app.use(logger);
app.get("/books",function(req,res)
{
    res.send({route: "/books"});
})
app.get("/libraries",function(req,res)
{
    res.send({route: "/libraries", permission: true});
})
app.get("/authors",function(req,res)
{
    res.send({route: "/authors", permission: true});
})

function logger(req,res,next)
{
    console.log("logger Middleware");
    
    next();
}
app.listen(4500, () =>
{
    console.log("listening 4500 port");
})