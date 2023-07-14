const express = require("express")
const { checkSchema } = require('express-validator')

const router = new express.Router

// middleware
const validate = require("../middleware/validate")
const asyncHandler = require("../middleware/asyncHandler")

//apps
const signApp = require("../apps/sign")

// validate, file loader
const createFile = require("../utils/file/createFile")
const { login, register } = require("../utils/validate/userSign")

// Api list
// Хэрэглэгч анх вэбийг ачааллуулахад нэвтэрсэн эсэхийг шалгах
router
    .route("/check/")
    .get(asyncHandler(signApp.check))

// admin бүртгүүлэх хэсэг
router
    .route("/register/")
    .post(validate(checkSchema(register)), asyncHandler(signApp.register))

// admin нэвтрэх хэсэг
router
    .route("/login/")
    .post(validate(checkSchema(login)), asyncHandler(signApp.login))

// Logouts
    router.get("/logout/", signApp.signOut)

module.exports = router
