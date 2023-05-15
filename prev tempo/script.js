const key = "ca69c4e31b1e998cb7d10a7f78cd9069"

function colocarDadosNatela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade){
                    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${"ca69c4e31b1e998cb7d10a7f78cd9069"}&units=metric`).then(resposta => resposta.json())
                    colocarDadosNatela(dados) 

}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value


    buscarCidade(cidade)
}