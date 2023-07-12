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


// create behavior

router
    .route("/create/")
    .post(asyncHandler(behaviorApp.create))

module.exports = router
