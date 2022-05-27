let nome = document.querySelector('#nome')

let email = document.querySelector('#email')

let jogo1 = document.querySelector('#jogo1')

let jogo2 = document.querySelector('#jogo2')

let jogo3 = document.querySelector('#jogo3')

let nomeOk = false

let emailOk = false

let jogo1Ok = false

let jogo2Ok = false

let jogo3Ok = false


function ValidaNome() {

    let txt = document.querySelector('#txtNome')

    if (nome.value.length < 3) 

    {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } 
    
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }

}

function ValidaEmail() {

    let txt = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txt.innerHTML = 'E-mail Inválido'
        txt.style.color = 'red'
    } 
    
    else {
        txt.innerHTML = 'E-mail Válido'
        txt.style.color = 'green'
        emailOk = true
    }

}
function ValidaJogo1() {

    let txt = document.querySelector('#txtJogo1')

    if (jogo1.value.length < 3) 

    {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } 
    
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        jogo1Ok = true
    }

}

function ValidaJogo2() {

    let txt = document.querySelector('#txtJogo2')

    if (jogo2.value.length < 3) 

    {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } 
    
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        jogo2Ok = true
    }

}

function ValidaJogo3() {

    let txt = document.querySelector('#txtJogo3')

    if (jogo3.value.length < 3) 

    {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } 
    
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        jogo3Ok = true
    }

}

function Enviar() {
    if (nomeOk == true && emailOk == true && jogo1Ok == true && jogo2Ok == true && jogo3Ok == true)

    {
        alert('Enviado com sucesso!')
    }

    else

    {
        alert('Preencha todos os campos corretamente antes de enviar!')
    }
}