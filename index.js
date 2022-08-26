const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://victor:db123456@cluster0.h3p4lnt.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
  username: String,
  age: Number,
})

const create = async () => {
  const user = new User({ username: 'Carlos', age: 12})
  const savedUser = await user.save()
  console.log(savedUser);
}

      // create() 

const buscarTodo = async () => {
  const users = await User.find()
  console.log(users);
}

// buscarTodo()

const buscar = async () => {
  const user = await User.find({username: 'Victor', })
  console.log(user)
}
// buscar( )

const buscarUno = async () => {
  const user = await User.findOne({ username: 'Victor' })
  console.log(user)
}

// buscarUno()

const actualizar = async () => {
  const user = await User.findOne({ username: 'Victor'})
  console.log(user)
  user.age = 30
  await user.save()
}

// actualizar()

const eliminar = async () => {
  const user = await User.findOne({ username: 'Victor'})
  console.log(user)
  if(user) {
    await user.remove()
  } else {
    console.log('usuario no existe')
  }
}

eliminar()