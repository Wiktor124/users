const initialTemplate = () => {
  const template = `
  <form action="" id="user-form">
    <div>
      <label>Name</label>
      <input type="text" name="name">
    </div>
    <div>
      <label>Last Name </label>
      <input type="text" name="lastname">
    </div>
    <input type="submit" value="Send">
  </form>
  <ul id="user-list"></ul>
  `

  const body = document.getElementsByTagName('body')[0]

  body.innerHTML = template
}

const getUsers = async () => {
  const response = await fetch('/f')
  const users = await response.json()
  console.log(users)
  const template = user => `
  <li>${user.name} ${user.lastname} <button data-id="${user._id}">Eliminar</button></li>
  `
  const userList = document.getElementById('user-list')
  userList.innerHTML = users.map(user => template(user)).join('')
  users.forEach(user => {
    const userNode = document.querySelector(`[data-id="${user._id}"]`)
    userNode.onclick = async e => {
      await fetch(`/f/${user._id}`, {
        method: 'DELETE', 
      })
      userNode.parentNode.remove()
      alert('Eliminado con exito')
    }
  })

}

const addFormListener = () => {
  const userForm = document.getElementById('user-form')
  userForm.onsubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(userForm)
    const data = Object.fromEntries(formData.entries())
    await fetch('/f', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    userForm.reset()
    getUsers()
  }
}


window.onload = () => {
  initialTemplate()
  addFormListener()
  getUsers()
}