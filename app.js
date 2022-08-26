const express = require('express')
const mongoose = require('mongoose');
const user = require('./api/controllers/user.controller')
const app = express()

app.use(express.json())
mongoose.connect('mongodb+srv://victor:db123456@cluster0.h3p4lnt.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/https://users-khaki.vercel.app/', user.list)
app.post('/https://users-khaki.vercel.app/', user.create)
app.get('/https://users-khaki.vercel.app/:id', user.get)
app.put('/https://users-khaki.vercel.app/:id', user.update)
app.patch('/https://users-khaki.vercel.app/:id', user.update)
app.delete('/https://users-khaki.vercel.app/:id', user.destroy)

app.use(express.static('js'))

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
  res.status(404).send('Esta pagina no existe')
})


app.listen(3000, () => {
  console.log('Server on port 3000')
})