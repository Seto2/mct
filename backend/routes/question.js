const express = require("express")
const { checkSchema } = require('express-validator')

const router = new express.Router

// middleware
const validate = require("../middleware/validate")
const asyncHandler = require("../middleware/asyncHandler")

//apps
const questionApp = require("../apps/question")

// validate, file loader
const createFile = require("../utils/file/createFile")


// get behavior list
router
    .route("/")
    .get(asyncHandler(questionApp.getList))
    .post(asyncHandler(questionApp.create))
    .put(asyncHandler(questionApp.update))
    .delete(asyncHandler(questionApp.delete))

router
    .route("/get/")
    .get(asyncHandler(questionApp.getObject))

module.exports = router
