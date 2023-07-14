const UserSchema = require("../../../models/user")

// Нэвтрэх хуудасны validate
exports.login =
{
    email:
    {
        isEmail:
        {
            bail: true,
            errorMessage: 'И-мэйл ээ оруулна уу.'
        }
    },
    password:
    {
        notEmpty:
        {
            errorMessage: 'Нууц үгээ оруулна уу.'
        }
    }
},

//Бүртгүүлэх хуудасны validate
exports.register =
{
    email:
        {
            isEmail:
            {
                bail: true,
                errorMessage: 'И-мэйл оруулна уу.'
            },
            custom:
            {
                options: value =>
                {
                    return UserSchema.find(
                        {
                            email: value
                        })
                        .then(user =>
                            {
                                if (user.length > 0)
                                    return Promise.reject('И-мэйл хаяг бүртгэлтэй байна.')
                            })
                }
            }
        },
    password:
        {
            notEmpty:
            {
                errorMessage: 'Нууц үгээ оруулна уу.'
            },
            isLength:
            {
                errorMessage: 'Нууц үг хамгийн багадаа 8 тэмдэгттэй байна',
                options: { min: 8 },
            },
        },
    passwordVerify:
    {
        notEmpty:
        {
            errorMessage: 'Нууц үгээ давтаж оруулна уу.'
        },
        custom:
        {
            errorMessage: 'Нууц үг ижил байх ёстой.',
            options: (value, { req }) => value === req.body.password
        }
    }
}
