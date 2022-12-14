checkLoginStatus()
function checkLoginStatus() {
  let data = localStorage.getItem('vueTest')
  data = JSON.parse(data)
  console.log(data)
}

function logout() {
  localStorage.getItem('vueTest')
}
