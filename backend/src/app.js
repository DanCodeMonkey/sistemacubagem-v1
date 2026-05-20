const express = require('express')
const cors = require('cors')

const produtoRoutes = require('./routes/produtoRoutes')

const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./docs/swagger')

const app = express()

app.use(cors())
app.use(express.json())

// middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

// rotas
app.use('/produtos', produtoRoutes)

// swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = app