const CError = require('../../utils/rsp')

const Behavior = require('../../models/behavior')
const behaviorService = require('../../services/behavior')


// зан төлөв үүсгэх
exports.create = async (req, res) =>
{
    const behaviorBody = req.body

    const behavior = await behaviorService.createBehavior(behaviorBody)
        .catch(
            err =>
            {
                throw new CError(err.message)
            }
        )

    // Амжилттай гэсэн мэссэж буцаана
    req.sendDataInfo("INF_001", behavior)
}
