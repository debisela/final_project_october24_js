const express = require('express')
const {_getFields, _saveTagFields, _getSelectedFields, _updateFontType, _getFontType, _updateFontColor, _getFontColor}=require('../controllers/adminController.js')

const router = express.Router()

//route to get all available fields and chose relevant
router.get('/fields', _getFields)

//route to save selected fields for tag
router.post('/tag/fields', _saveTagFields)

//route to get all selected fields
router.get('/tag/fields', _getSelectedFields)


//route to save font-type of selected fields
router.post('/tag/font', _updateFontType)

//route to get font-type of selected fields
router.get('/tag/font', _getFontType)

//route to save font-color for each field
router.post('/tag/color', _updateFontColor)

//route to get font-color of selected fields
router.get('/tag/color', _getFontColor)

module.exports = router

