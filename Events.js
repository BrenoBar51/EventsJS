const email = document.getElementById('email')
const password = document.querySelector('#password')

function enviarForm(event) {
    event.preventDefault()
    for (let i = 0; i < event.target.length; i++){
        if(event.target[i].value){
            console.log(event.target[i].value)
        } else{
            console.log('Não tem valor')
        }
    }
    console.log(email.value, password.value)
}