var mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        firstName:
        {
            type: String,
            required: false,
            unique: [true, 'бүртгэлтэй нэр байна'],
        },
        lastName:
        {
            type: String,
            required: false
        },
        phoneNumber:
        {
            type: mongoose.Types.Decimal128,
            required: false,
        },
        email:
        {
            match: /.+\@.+\..+/,
            unique: [true, 'бүртгэлтэй мейл байна'],
            type: String,
            lowercase: true,  // орж ирсэн бүх утгыг жижиг үсэг болгон өөрчлөнө
            required: [true, 'бүртгэлтэй мейл байна']
        },
        password:
        {
            type: String,
            required: true
        },
        isAdmin:
        {
            type: Boolean,
            required: true,
            default: false
        },
        lastConnectedDate:
        {
            type: Date,
            required: false,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

/** Хэрэглэгч email-ээ баталгаажуулаагүй бол хэрэглэгчийн мэдээллийг устгах */
UserSchema.index({ createdAt: 1 }, { expireAfterSeconds: 1800, partialFilterExpression: { isVerified: false } });

/**
 * нууц үгийг
 */
UserSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});

/**
 *
 * @param {string} password
 */
UserSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compareSync(password, this.password)
    return isMatch
}

module.exports = mongoose.model('User', UserSchema);
