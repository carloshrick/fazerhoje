import express from 'express'
import cors from 'cors'

// Cria uma instância do aplicativo Express
const app = express();

// Configura os processadores para lidar com as solicitações e respostas:

app.use(express.json())     // Diz ao servidor para entender informações em formato JSON

app.use(cors())     // Diz ao servidor para permitir que diferentes sites acessem este servidor

app.use(express.urlencoded({extended : true}))  // Diz ao servidor para entender informações de formulário

// Define uma regra: se alguém acessar a raiz ("/") do nosso site usando um navegador, faça o seguinte:

app.get("/",(req,res)=>{    // Quando alguém acessa a raiz, esta função é executada
     


    
    return res.status(200).json("hello world")   // Envie de volta uma mensagem "hello world" como resposta:
})


app.listen(4000,()=>{console.log("Running!")})  // Inicia o servidor na porta 4000