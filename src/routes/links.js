const express = require('express')

const { getLinks, createLink, updateLinkById, deleteLinkById } = require('../controllers/links')

const router = express.Router()

router.get('/links', getLinks)
router.post('/links', createLink)
router.put('/links/:linkId', updateLinkById)
router.delete('/links/:linkId', deleteLinkById)

module.exports = router