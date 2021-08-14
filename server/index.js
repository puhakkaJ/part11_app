const express = require('express')
const routes = require('@util/routes')
const errorMiddleware = require('@middleware/errorMiddleware')

const app = express()

app.use(express.json())

app.use(routes)

app.use(errorMiddleware)

app.get('/health', (req, res) => {
    res.send('ok')
  })

module.exports = app
