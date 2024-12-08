let botao = document.getElementById("bola3")
botao.style.display = "none"
let senha = document.getElementById("senha")
let btt = document.getElementById("btt")
let interativo = document.getElementById("interativo")

vovo.style.display = "none"

btt.onclick = function(){
    let senha = document.getElementById("senha")
    let senha2 = document.getElementById("senha2")
    let mail = document.getElementById("mail")
    let res = document.getElementById("res")
    
    if(mail.value.length == 0){
        botao.style.display = "flex"
        res.innerText = `E-mail incorreto, tente novamente!`

        setTimeout(()=>{
            botao.style.display = "none"
        }, 5000)

        return
    }else if(senha.value.length == 0 || senha2.value.length == 0 ){

        botao.style.display = "flex"

        res.innerText = `Senha incorreta, tente novamente!`

        setTimeout(()=>{
            botao.style.display = "none"
        }, 5000)
        return
    }

    
    
}

senha.oninput = function ani(){

    let interativo = document.getElementById("interativo")
    let amo = document.getElementById("amo")
    let r1 = document.getElementById("r1")
    let vovo = document.getElementById("vovo")
    let hello = document.getElementById("hello")
    let largura = ["10%", "25%","50%" , "75%", "100%"]
    let cores = ["#F2D5C4","#734338","#F27B50","#400601","#260101"]
    let valor = senha.value
    let contador = 0
    vovo.style.display = "flex"
    let minhaex = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /[^a-zA-Z0-9]/
    ]

    minhaex.forEach((item)=>{

        if(item.test(valor)){

            contador += 1
        }

    })

    hello.style.padding = "20px"

    if(senha.value.length == 0 ){
        vovo.style.display = "none"
    }
    r1.style.textAlign = "center"
    r1.style.marginTop = "10px"
    r1.style.fontSize = "17px"
    r1.style.fontWeight = "bold"
    hello.style.textAlign = "center"

    if(contador <= 1){
        r1.innerText = "Senha fraca"
        r1.style.color = "#734338"
        hello.innerText = "Utilize letras maiúsculas , minúsculas , numeros e caracteres especias para gerar uma senha forte! "
    }else if(contador <= 3){
        r1.innerText = "Senha média"
        r1.style.color = "#400601"
        hello.innerText = "Utilize letras maiúsculas , minúsculas , numeros e caracteres especias para gerar uma senha forte! "
    }else{
        r1.innerText = "Senha forte"
        r1.style.color = "#260101"
        hello.innerText = ""
    }

    amo.style.width = largura[contador]
    amo.style.backgroundColor = cores[contador]

}