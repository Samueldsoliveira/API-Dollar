let span = document.getElementById("span");

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json();
}).then(corpo => {
    console.log(corpo);
    valorDolarAtual = corpo.USDBRL.ask
    corpo.preventDefault();
})

function conversor(event){
    //acessar o que foi digitado
    let reais = document.getElementById('reais').value;
            
    //converter de string para float
    reais = parseFloat(reais);
            
    //converter para dolares
    dolares = (reais / valorDolarAtual).toFixed(2);
            
    console.log(dolares);
            
    span.innerHTML = dolares + " dolares";
    event.preventDefault();
}