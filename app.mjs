import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import appRouter from './api/controllers/user.controller.js';
import { list } from './api/controllers/user.controller.js';

const app = express()

const PORT = process.env.PORT;
app.use(express.json())
app.use(express.static('public'))

mongoose.connect(`mongodb+srv://victor:${process.env.DB_URI}@cluster0.h3p4lnt.mongodb.net/?retryWrites=true&w=majority`)

app.use('/users', appRouter, list)

app.listen(PORT, () => {
  console.clear()
  console.log('Server on port:', PORT)
})