import express from 'express'
import { saveJsonAsFile, isMoreThan24HoursAgo, getGoogleSheet } from './utils'
import { CACHE } from '../constants'

const router = express.Router()

/* GET resources */
router.get('/', async function (req, res, next) {
    let json
    if (!isMoreThan24HoursAgo(CACHE.timestamp)) {
        console.log('------- USING CACHE -------')
        json = CACHE
    } else {
        try {
            let sheetResp = await getGoogleSheet()
            let resources = sheetResp.resources.filter(
                (r) =>
                    r.Title &&
                    r.Title.length > 0 &&
                    r['Source (Organization)'] &&
                    r['Source (Organization)'].length > 0 &&
                    r.Link &&
                    r.Link.length > 0
            )
            const successMessage = 'GSheet Data Refreshed!'
            json = { ...sheetResp, resources }
            console.log(json)
            saveJsonAsFile({ json, successMessage })
        } catch (err) {
            console.error(err)
        }
    }
    res.json({ response: json })
})

export default router
