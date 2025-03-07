// alert("Ola mundo")
//
//
// var test = prompt("digite sua mensagem")
//
// alert(test)

function testtexto() {
    document.getElementById("titulo").innerHTML += "Boa tarde"
}
//
// function testcolor  () {
//    const titulo =document.getElementById("titulo")
//     titulo.style.color ='red'
//     titulo.style.fontSize ='50px'
// }

function reset() {
    document.getElementById("titulo").innerHTML = "Bem-vindo ao Nosso Site"
}

function testinput() {
    document.getElementById('input').value = "tarde"
}

function limpar() {
    var limpar = confirm("Você deseja mesmo limpar o formulario")
    if (limpar)
        document.getElementById('nomes').value = ""
        document.getElementById('sobrenomes').value = ""
        document.getElementById('inputEmail4').value = ""
        document.getElementById('inputsenha').value = ""
        document.getElementById('inputendereço').value = ""
        document.getElementById('inputcidade').value = ""
        document.getElementById('inputestado').value = ""
        document.getElementById('inputcpf').value = ""
        document.getElementById('confirmar').value = ""

}


function nome() {
    document.getElementById('labelnome').style.color = 'red'

}

function sobrenome() {
    document.getElementById('labelsobrenome').style.color = 'red'

}

function email() {
    document.getElementById('email').style.color = 'red'

}

function senha() {
    document.getElementById('senha').style.color = 'red'

}
function endereco() {
    document.getElementById('endereço').style.color = 'red'

}

function cidade() {
    document.getElementById('cidade').style.color = 'red'

}

function estado() {
    document.getElementById('estado').style.color = 'red'

}

function cpf() {
    document.getElementById('cpf').style.color = 'red'

}

function confirmar() {
    document.getElementById('tudo_ok').style.color = 'red'

}








function labelnomes() {
    document.getElementById('nomes').value = 'Nome'

}

function labelsobrenomes() {
    document.getElementById('sobrenomes').value = 'Sobrenome'

}

function labelemail() {
    document.getElementById('inputEmail4').value = 'Email'

}

function labelsenha() {
    document.getElementById('inputsenha').value = 'Senha'

}

function labelendereco() {
    document.getElementById('inputendereço').value = 'Endereço'

}

function labelcidade() {
    document.getElementById('inputcidade').value = 'Cidade'

}

function labelestado() {
    document.getElementById('inputestado').value = 'Estado'

}


function labelcpf() {
    document.getElementById('inputcpf').value = 'Cpf'

}

