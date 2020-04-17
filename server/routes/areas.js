import express from 'express'
import path from 'path'
import { createUniqueSet } from './utils'

const router = express.Router()

/* GET areas. */

router.get('/', async function (req, res, next) {
    try {
        const json = require(path.resolve(__dirname, '../../data/cached'))
        let areaSet = createUniqueSet(json.resources, 'Area')
        res.json({ areas: areaSet })
    } catch (err) {
        res.status(500)
        res.json({ error: err.message })
    }
})

export default router
