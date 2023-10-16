import express from "express";

const app = express();

  let lista = [1,2,3,4,5]

app.get("/",(requisicao,resposta)=>{
 
   return resposta.send(lista)

    
});

app.post("/novo",(requisicao,resposta)=>{
    console.log(requisicao)
})

app.listen(3000,()=>{
    console.log('api está no ar!');
})

