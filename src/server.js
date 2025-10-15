import http from 'node:http'

const server = http.createServer((req, res) => {
    const {method, url} = req

    if(url == "/user" && method == "GET"){
        return res.end("Buscar usuários")
    }

     if(url == "/user" && method == "POST"){
        return res.end("Criar usuários")
    }
    return res.end("Hello Worlds")
})

server.listen(3333)