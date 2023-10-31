// Made by Poukam Pierre

const express = require('express')
const router = express.Router()
const upload = require('../utils/multer')
const sendingMsgWhatCtrl = require('../controllers/sendWhatMsg')


router.post('/whatsapp',   upload.array('file', 2000), sendingMsgWhatCtrl.sendWhatMsg)


module.exports = router