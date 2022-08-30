import 'dotenv/config'
import express  from 'express';
import path from 'path';
import mongoose from 'mongoose';
import {User} from './api/controllers/user.controller.js';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express()


const PORT = process.env.PORT;
app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb+srv://victor:db123456@cluster0.h3p4lnt.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
})

app.get('/users', User.list)
app.post('/users', User.create)
app.get('/users/:id', User.get)
app.put('/users/:id', User.update)
app.patch('/users/:id', User.update)
app.delete('/users/:id', User.destroy)

app.get('*', (req, res) => {
  res.status(404).send('Esta pagina no existe')
})

app.listen(PORT, () => {
  console.clear()
  console.log('Server on port:', PORT)
})