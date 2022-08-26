const express = require('express')
const mongoose = require('mongoose');
const user = require('./api/controllers/user.controller')
const app = express()

app.use(express.json())
mongoose.connect('mongodb+srv://victor:db123456@cluster0.h3p4lnt.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/f', user.list)
app.post('/f', user.create)
app.get('/f/:id', user.get)
app.put('/f/:id', user.update)
app.patch('/f/:id', user.update)
app.delete('/f/:id', user.destroy)

app.use(express.static('js'))
// app.use(express.static('css'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
  res.status(404).send('Esta pagina no existe')
})


app.listen(3000, () => {
  console.log('Server on port 3000')
})