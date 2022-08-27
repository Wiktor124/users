

const initialTemplate = () => {
  const template = `
  <form action="" id="user-form">
    <div>
      <label>Name</label>
      <input type="text" name="name" autocomplete="off">
    </div>

    <input type="submit" value="Send">
  </form>
  <ul id="user-list"></ul>
  `

  const body = document.getElementsByTagName('body')[0]

  body.innerHTML = template
}

// {/* <div>
// <label>Last Name </label>
// <input type="text" name="lastname" autocomplete="off">
// </div> */}

const url = 'users'

const getUsers = async () => {
  const response = await fetch(url)
  const users = await response.json()
  const template = user => `
  <li>${user.name} ${user.lastname} <button data-id="${user._id}">Eliminar</button></li>
  `
  const userList = document.getElementById('user-list')
  userList.innerHTML = users.map(user => template(user)).join('')
  users.forEach(user => {
    const userNode = document.querySelector(`[data-id="${user._id}"]`)
    userNode.onclick = async e => {
      await fetch(`${url}/${user._id}`, {
        method: 'DELETE', 
      })
      userNode.parentNode.remove()
    }
  })

}

const addFormListener = () => {
  const userForm = document.getElementById('user-form')
  userForm.onsubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(userForm)
    const data = Object.fromEntries(formData.entries())
    await fetch(url, {
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