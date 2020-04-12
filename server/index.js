import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
// import * as debug from 'debug'
import dotenv from 'dotenv'
import http from 'http'
import normalizePort from './utils/normalizePort'
import resourcesRouter from './routes/resources'
import metadataRouter from './routes/metadata'
import tagsRouter from './routes/tags'

dotenv.config()

const app = express()
const port = normalizePort(process.env.PORT || '3001')
app.set('port', port)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, '../build')))

app.use('/api', (req, res, next) => {
    const authorized = req.header('X-API-KEY') === process.env.APP_MASTER_KEY

    if (!authorized) {
        res.status(401)
        res.json({ error: 'Unauthorized' })
    } else {
        next()
    }
})
app.use('/api/metadata', metadataRouter)
app.use('/api/resources', resourcesRouter)
app.use('/api/tags', tagsRouter)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
})
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Listening on port ${server.address().port}`)
})

server.on('error', (err) => {
    console.error(err)
})

export default app
