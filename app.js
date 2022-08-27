const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const user = require('./api/controllers/user.controller')
const app = express()

app.use(express.json())
app.use(express.static('public'))
mongoose.connect('mongodb+srv://victor:db123456@cluster0.h3p4lnt.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
})

app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)


app.get('*', (req, res) => {
  res.status(404).send('Esta pagina no existe')
})


app.listen(3000, () => {
  console.log('Server on port 3000')
})