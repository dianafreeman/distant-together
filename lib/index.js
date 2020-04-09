'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
    value: true,
})
exports.default = void 0

var _express = _interopRequireDefault(require('express'))

var _path = _interopRequireDefault(require('path'))

var _cookieParser = _interopRequireDefault(require('cookie-parser'))

var _morgan = _interopRequireDefault(require('morgan'))

var _dotenv = _interopRequireDefault(require('dotenv'))

var _http = _interopRequireDefault(require('http'))

var _normalizePort = _interopRequireDefault(require('./utils/normalizePort'))

var _resources = _interopRequireDefault(require('./routes/resources'))

var _areas = _interopRequireDefault(require('./routes/areas'))

var _tags = _interopRequireDefault(require('./routes/tags'))

// import * as debug from 'debug'
_dotenv.default.config()

var app = (0, _express.default)()
var port = (0, _normalizePort.default)(process.env.PORT || '3001')
app.set('port', port)
app.use((0, _morgan.default)('dev'))
app.use(_express.default.json())
app.use(
    _express.default.urlencoded({
        extended: false,
    })
)
app.use((0, _cookieParser.default)())
app.use(_express.default.static(_path.default.resolve(__dirname, '../build')))
app.use('/api', function (req, res, next) {
    var authorized = req.header('X-API-KEY') === process.env.APP_MASTER_KEY

    if (!authorized) {
        res.status(401)
        res.json({
            error: 'Unauthorized',
        })
    } else {
        next()
    }
})
app.use('/api/resources', _resources.default)
app.use('/api/areas', _areas.default)
app.use('/api/tags', _tags.default)
app.get('*', function (req, res) {
    res.sendFile(_path.default.resolve(__dirname, '../build/index.html'))
})

var server = _http.default.createServer(app)

server.listen(port, function () {
    console.log('Listening on port '.concat(server.address().port))
})
server.on('error', function (err) {
    console.error(err)
})
var _default = app
exports.default = _default
