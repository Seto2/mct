const express = require("express")
const { checkSchema } = require('express-validator')

const router = new express.Router

// middleware
const validate = require("../middleware/validate")
const asyncHandler = require("../middleware/asyncHandler")

//apps
const behaviorApp = require("../apps/behavior")

// validate, file loader
const createFile = require("../utils/file/createFile")


// get behavior list
router
    .route("/")
    .get(asyncHandler(behaviorApp.getList))
    .post(asyncHandler(behaviorApp.create))
    .put(asyncHandler(behaviorApp.update))
    .delete(asyncHandler(behaviorApp.delete))

module.exports = router
