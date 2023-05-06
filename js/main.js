document.getElementById("btnRegistrarse").addEventListener("click", register);
document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

let loginRegisterContainer = document.querySelector(".loginRegisterContainer");
let loginForm = document.querySelector(".loginForm");
let registerForm = document.querySelector (".registerForm");
let backgroundBoxLogin = document.querySelector (".backgroundBoxLogin");
let backgroundBoxRegister = document.querySelector (".backgroundBoxRegister");


function anchoPagina(){
    if(window.innerWidth > 850){
        backgroundBoxLogin.style.display = "block";
        backgroundBoxRegister.style.display = "block";
    }else{
        backgroundBoxRegister.style.display = "block";
        backgroundBoxRegister.style.opacity = "1";
        backgroundBoxLogin.style.display = "none";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        loginRegisterContainer.style.left = "0px"
    }
}

anchoPagina();

function iniciarSesion(){
    if(window.innerWidth > 850) {
        registerForm.style.display = "none";
        loginRegisterContainer.style.left = "10px";
        loginForm.style.display = "block";
        backgroundBoxRegister.style.opacity = "1";
        backgroundBoxLogin.style.opacity = "0";
    }else{
        registerForm.style.display = "none";
        loginRegisterContainer.style.left = "0px";
        loginForm.style.display = "block";
        backgroundBoxRegister.style.display = "block";
        backgroundBoxLogin.style.display = "none";
    }
}

function register (){
    if(window.innerWidth > 850){
        registerForm.style.display = "block";
        loginRegisterContainer.style.left = "410px";
        loginForm.style.display = "none";
        backgroundBoxRegister.style.opacity = "0";
        backgroundBoxLogin.style.opacity = "1";
    }else{
        registerForm.style.display = "block";
        loginRegisterContainer.style.left = "0px";
        loginForm.style.display = "none";
        backgroundBoxRegister.style.display = "none";
        backgroundBoxLogin.style.display = "block";
        backgroundBoxLogin.style.opacity = "1";
    }
}
// -------------------------------------------------------------------------------------------------------
// Intento de registro con localStorage 
const registroForm = document.querySelector ('#registerFormId');
registroForm.addEventListener ('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector ('#name').value
    const email = document.querySelector ('#emailR').value
    const username = document.querySelector ('#username').value
    const password = document.querySelector ('#passwordR').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const usersRegistrados = users.find (user => user.email === email)
    if (usersRegistrados){
        return Swal.fire({
            icon: 'error',
            title: 'No Pai',
            text: 'Has introducido datos erroneos o ya registrados',
            
        })
    }

users.push({name: name, email: email, username: username, password: password})
localStorage.setItem('users', JSON.stringify(users))
Swal.fire({
    icon: 'succese',
    title: 'Letsgoo',
    text: 'Tremendo registro pai',
    
})
})



// ---------------------------------------------------------------------------------------------------------
// intento de login 

const logueoForm = document.querySelector ('#loginFormId')
loginForm.addEventListener ('submit', (e)=>{
    e.preventDefault()
    const email =document.querySelector('#email').value
    const password =document.querySelector('#password').value
    const users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = users.find(user => user.email === email && user.password === password)
    if (!validUser){
        return Swal.fire({
            icon: 'error',
            title: 'No Pai',
            text: 'Has introducido datos erroneos o aun no registrados',
            
        })
    }
    window.location.href = './pages/shop.html'

})