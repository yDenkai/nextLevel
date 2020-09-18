const express = require('express')
const server = express()

const {pageLanding,
pageStudy,
pageGiveClasses,
saveClasses} = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express:server,
    noCache:true,
})

server.use(express.static("public")) //configurar arquivos estaticos(css,scripts,img)
//receber os dados req.body
.use(express.urlencoded({extended:true}))
//configurando as rotas
.get("/", pageLanding)  
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) 
.listen(5500);