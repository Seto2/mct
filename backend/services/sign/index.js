const jwt = require('jsonwebtoken')
const crypto = require('crypto')

//models
const User = require('../../models/user')

//utils
const { timeToMs } = require('../../utils/date')


/**
 * Хэрэглэгчийн мэдээлэл болон тохиргоо баазаас авах
 * @param {object} userId хэрэглэгчийн id
 * @returns хэрэглэгчийн profile болон тохиргоо
 */
exports.getUserProfile = async (userId) =>
{
    let user = await User.findById(userId)

    return user
}

/**
 * Хэрэглэгч шинээр бүртгэх
 * @param {object} content бүртгэх мэдээлэл
 * @returns үүсгэсэн бүртгэх мэдээлэл
 */
exports.up = async (content) =>
{
    const user = new User(content)

    await user.save()
        // .catch((err) =>
        //     {
        //         throw new Error("ERR_001")
        //     }
        // )

    return user
}

/**
 *  Нэвтрэлт
 * @param {string} email        нэвтрэх цахим хаяг
 * @param {string} password     нэвтрэх нууц үг
 * @param {object} res          cookie г оноох
 * @returns нэвтрэх мэдээлэл
 */
exports.in = async (email, password, res) =>
{
    //хэрэглэгчийн имэйлийг шалгана
    const user = await User.findOne(
        {
            email: email,
        }
    )

    //хэрэглэгчийн мэдээлэл байгаа эсэхийг шалгаж буй
    if (user === null) {
        throw new Error('ERR_005')
    }

    /**
     *
     */
    const isMatch = await user.comparePassword(password.toString())
    if(!isMatch)
        throw new Error('ERR_005')

    const userProfile = await this.getUserProfile(user._id.toString());

    // нэвтрэх үед хэрэглэгчийн id-г токенд хадгална
    let token = jwt.sign(
        {
            id: user._id,
            email: user.email,
        },
        //токений хүчинтэй хугацааг хадгалж буй
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_EXPIRE_TIME
        }
    )

    /** Cookie үүсгэж байгаа түүний тохиргоо */
    const cookieOption = {
        expires: new Date(Date.now() + timeToMs(process.env.JWT_EXPIRE_TIME)),
        httpOnly: true,
    }

    //Токенийг cookie-нд хадгална
    res.cookie(process.env.TOKEN_NAME, token, cookieOption);

    return userProfile
}
