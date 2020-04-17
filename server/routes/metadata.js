import express from 'express'
import { createUniqueSet } from './utils'
import path from 'path'

const json = require(path.resolve(__dirname, '../../data/cached'))
let areaSet = createUniqueSet(json.resources, 'Area')

const router = express.Router()

/* GET areas. */

router.get('/', async function (req, res, next) {
    try {
        const json = require(path.resolve(__dirname, '../../data/cached'))
        let audienceSet = createUniqueSet(json.resources, 'Resources For')
        res.json({ audiences: audienceSet })
    } catch (err) {
        res.status(500)
        res.json({ error: err.message })
    }
})

export default router
