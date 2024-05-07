const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs")

const middleware = (req, res, next) => {
    console.log("hello");
    let age = req.query.age;
    if (age >= 18) {
        return next();
    }
    return res.redirect('/')
}
// app.use(middleware);

app.get('/', (req, res) => {
    return res.render('index')
})

app.get('/form-basic', (req, res) => {
    return res.render('form-basic')
})

app.get('/ui-buttons', (req, res) => {
    return res.render('ui-buttons')
})
app.get('/ui-alerts', (req, res) => {
    return res.render('ui-alerts')
})
app.get('/ui-card', (req, res) => {
    return res.render('ui-card')
})
app.get('/ui-forms', (req, res) => {
    return res.render('ui-forms')
})
app.get('/ui-typography', (req, res) => {
    return res.render('ui-typography')
})
app.get('/authentication-login', (req, res) => {
    return res.render('authentication-login')
})
app.get('/authentication-register', (req, res) => {
    return res.render('authentication-register')
})
app.get('/icon-tabler', (req, res) => {
    return res.render('icon-tabler')
})
app.get('/sample-page', (req, res) => {
    return res.render('sample-page')
})
app.listen(PORT, (err) => {
    if (err) {
        console.log('server not started');
        return false
    }
    console.log("server started")
})