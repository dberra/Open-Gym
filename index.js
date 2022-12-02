//index.js
const path = require('path')
const express = require('express')
const app = express()
app.use(require('body-parser').urlencoded({extended:false}))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))

app.get('/', (req, res) => {res.render('exercise_display')})
//app.get('/', (req, res) => res.send('Hello world!'))

app.post('/variation_select', (req, res) => {
    res.json(req.body)
})

app.listen(3000, () => console.log('Server ready'))