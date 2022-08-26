const express = require('express')
const mongoose = require('mongoose');
const user = require('./api/controllers/user.controller')
const app = express()

app.use(express.json())
mongoose.connect('mongodb+srv://victor:db123456@cluster0.h3p4lnt.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('js'))

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
  res.status(404).send('Esta pagina no existe')
})


app.listen('https://https://users-khaki.vercel.app/', () => {
  console.log('Server on port 3000')
})