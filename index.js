const path = require('path')
const express = require('express')

const app = express()

app.use (express.static('public'))

app.get('/version', (request,response) => {
 response.json({
     version: '1.0',
     author: 'Luis Sequeira'
 })
})

app.get('/about', (request,response) => {
    response.send({
        author: 'Luis Sequeira'
    })
   })

app.get('/index', (request,response) => {
    console.log(path.resolve(__dirname, 'index.html'))
    response.sendFile(path.resolve(__dirname, 'index.html'))
   })

app.listen(3000, () => {
    console.log('App listenining on port 3000')
})



/* const http = require('http')
const fs = require ('fs')

const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const homePage = fs.readFileSync('index.html')

const server = http.createServer((request,response)=> {
    console.log(request.url)

    if (request.url === '/about') {
        //response.end('THE ABOUT PAGE')
        return response.end(aboutPage)
    } else if (request.url === '/contact') {
        //response.end('THE CONTACT PAGE')
        return response.end(contactPage)
    } else if (request.url === '/') {
        //response.end('THE HOME PAGE')
        return response.end(homePage)
    } else {
        return response.writeHead(404)
        return response.end('PAGE NOT FOUND')
    }
})

server.listen(3000) */