const CError = require('../../utils/rsp')

const Behavior = require('../../models/behavior')
const behaviorService = require('../../services/behavior')


/**
 * id гаар object баазаас авах
 */
exports.getObject = async(req, res) =>
{
    const { id } = req.query

    const object = await Behavior.findById(id)

    req.sendData(object)
}

/**
 * зан төлвийн жагсаалт авах name ээр хайж болно
 */
exports.getList = async(req, res) =>
{
    const { names } = req.query

    let find = {}

    if(typeof names != "undefined")
    {
        find = {
            name: {
                $in: names
            }
        }
    }

    const behaviorList = await Behavior.find(find).sort({name: 1})

    req.sendData(behaviorList)
}


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

/**
 * зан төлөв update
 */
exports.update = async (req, res) =>
{
    const { id } = req.query
    const updateBody = req.body

    const updatedBehavior = await behaviorService.updateBehavior(id, updateBody)
        .catch(
            err =>
            {
                throw new CError(err.message)
            }
        )

    // Амжилттай гэсэн мэссэж буцаана
    req.sendDataInfo("INF_002", updatedBehavior)
}

/**
 * delete зан төлөв
 */
exports.delete = async (req, res) =>
{
    const { id } = req.query

    const test = await Behavior.deleteOne({ _id: id })

    if(test.deletedCount==0)
    {
        throw new CError('ERR_404')
    }

    req.sendInfo('INF_003')
}
