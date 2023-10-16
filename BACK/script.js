document.querySelector('#btn').addEventListener("click",()=>{
    fetch("http://localhost:4000")
    .then((resposta)=>{

            resposta.json().then((dados)=>{
                console.log(dados)
            })
    })

})