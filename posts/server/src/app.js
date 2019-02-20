const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const ip = require('ip')

const port = process.env.PORT || 8081
const local_ip = ip.address()

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
})

console.log('Starting server...')
console.log('App running at:')
console.log('- Local:   http://localhost:' + port + '/')
console.log('- Network: http://' + local_ip + ':' + port + '/')
console.log('\n')

app.listen(port)