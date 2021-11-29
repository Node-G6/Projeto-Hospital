const mongodb = require('mongodb').MongoClient
const url = 'mongodb+srv://soulcode-g6:14253614@cluster0.4qnzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const client = new mongodb(url)

//função assincrona - começa a ser executada mas não pára a aplicação, ou seja, continua com a execução das outras rotinas
async function run(){
    try{
        //espera a conexão com o banco, quando essa conexão for estabelecida é impresso no console a mensagem
        await client.connect()
        console.log('Estamos conectados ao Banco')
    }
    //se não conseguiu a conexao, vai imprimir no console o erro
    catch(err){
        console.log(err)
    }
}
//aqui fizemos a chamada da função
run()
//aqui fizemos a exportação do módulo
module.exports = client
