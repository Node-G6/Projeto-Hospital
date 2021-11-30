const express = require('express')
const handle = require('express-handlebars')
const client = require('./conn')
const bodyParser = require('body-parser')

const LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch')

//para conseguirmos ler uma propriedade do tipo ObjectId precisamos fazer essa importação
const ObjectId = require('mongodb').ObjectId

const app = express()

const porta = 3000

const dbo = client.db('lojaOnline')

const hbs = handle.create({
    partialsDir: ('views/partials/')
})

//dizer para o express que o motor de renderização da página html vai ser o handlebars, através da variável hbs
app.engine('handlebars', hbs.engine)
//estamos setando o nosso view enigne com o motor de rederização handle bars
app.set('view engine', 'handlebars')

//o tráfego de dados pode ser por string
app.use(express.urlencoded())
//o tráfego de dados pode ser por objetos json
app.use(express.json())

//os nosso arquivos estáticos estão na página public
app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(porta, (req,res) =>{
    console.log('Servidor Rodando na porta: ' + porta)
})