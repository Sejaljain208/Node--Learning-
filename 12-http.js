// http module : used in case of response/request and also to create server 

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page..!')
        return
    }

    if (req.url === '/about') {
        res.end('here is our short history ...about page')
        return
    }

    res.end(`
        <h1>Oops..!</h1>
        <p>We can't seem to find the page , you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)