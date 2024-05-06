const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;

app.set("view engine", "ejs")

const middleware = (req, res, next) => {
    console.log("hello");
    let age = req.query.age;
    if (age >= 18) {
        return next();
    }
    return res.redirect('/')
}
app.use(middleware);

app.get('/', (req, res) => {
    return res.render('index')
})

app.get('/about', middleware, (req, res) => {
    return res.render('about')
})


app.listen(PORT, (err) => {
    if (err) {
        console.log('server not started');
        return false
    }
    console.log("server started")
})