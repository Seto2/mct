const jwt = require('jsonwebtoken')

// Errors
const CError = require('../../utils/rsp')
const crypto = require('crypto')

//models
const User = require('../../models/user')

// services
const signService = require('../../services/sign')


/**
 * Анх вэбийг ажиллуулж байхад нэвтэрсэн эсэхийг шалгах
 * @returns Object => { isLogin: Boolean, user: Object }
 */
exports.check = async(req, res) =>
{
    const token = req.cookies[process.env.TOKEN_NAME]

    let userData = {
        isLogin: false,
        user: {}
    }

    /** Token байхгүй бол нэвтэрсэн биш гэсэн үг */
    if (!token)
    {
        return req.sendData(userData)
    }
    /** Token байгаа бол хэрэглэгчийн мэдээллийг буцаана */
    else
    {
        try {
            const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
            let userId = validToken.id

            const user = await signService.getUserProfile(
                userId
            )
            userData = {
                isLogin: true,
                user: user
            }

            req.sendData(userData)

        } catch (err)
        {
            throw new CError("ERR_001")
        }
    }
}

/**
 * Бүртгүүлэх
 */
exports.register = async(req, res) =>
{
    /** хэрэглэгчийг үүсгэх нь */
    const user = await signService.up(req.body)
        .catch(
            err =>
            {
                throw new CError(err.message)
            }
        )

    req.sendDataInfo("INF_001", user)
}

/**
 * Нэвтрэх
 * @param {string} req.body.email            Нэвтрэх нэр
 * @param {string} req.body.password            Нэвтрэх нууц үг
 */
exports.login = async(req, res) =>
{
    var { email, password } = req.body
    /** Орж ирсэн майл хаягийн утгын бүх утгыг жижиг болгож байна! */
    email = email.toLowerCase();

    const userProfile = await signService.in(email, password, res)
        .catch(
            err =>
            {
                throw new CError(err.message)
            }
        )
    req.sendDataInfo("INF_011", userProfile)
}

/**
 * Системээс гарах Logout
 */
exports.signOut = async (req, res) =>
{
    res.cookie(process.env.TOKEN_NAME, "", { maxAge: 0 })
    req.sendInfo('INF_004', 'Гарах үйлдэл')
};

/**
 * Өгөгдөл засах нь
 * @param {object} where хайлтын мэдээлэл
 * @param {object} content засах мэдээлэл
 * @param {object} options тохиргоо
 * @param {Function} callback зассаны дараах мэдээлэл авах нь
 */
exports.update = async (where, content, options={}) => {

    delete content['isAdmin']
    delete content['_id']
    delete content['password']
    delete content['email']

    await User.updateOne(
        where,
        content,
        options,
    )
}
