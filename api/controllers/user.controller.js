import express from 'express';
import { Users } from '../modules/User.js'

const appRouter = express.Router()

// appRouter.get('/', async (req, res) => {
//   const { id } = req.params
//   const user = await Users.findOne({ _id: id })
//   res.status(200).send(user)
// })
appRouter.post('/', async (req, res) => {
  try {
    const user = new Users(req.body)
    const savedUser = await user.save()
    res.status(201).send(savedUser._id)
  } catch {
    return null
  }
})
export const list = async (req, res) => {

  const users = await Users.find()
  res.status(200).send(users)
}
appRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const user = await Users.findOne({ _id: id })
  Object.assign(user, req.body)
  await user.save()
  res.sendStatus(204)
})
appRouter.patch('/:id', async (req, res) => {
  const { id } = req.params
  const user = await Users.findOne({ _id: id })
  Object.assign(user, req.body)
  await user.save()
  res.sendStatus(204)
})
appRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Users.findByIdAndRemove({ _id: id })
  res.sendStatus(204)
})

export default appRouter