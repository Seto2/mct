const CError = require('../../utils/rsp')

const Answer = require('../../models/answer')
const answerService = require('../../services/answer')


/**
 * id гаар object баазаас авах
 */
exports.getObject = async(req, res) =>
{
    const { id } = req.query

    const object = await Answer.findById(id)

    req.sendData(object)
}

/**
 * зан төлвийн жагсаалт авах name ээр хайж болно
 */
exports.getList = async (req, res) =>
{
    const { question } = req.query

    let find = {}

    if(typeof question != "undefined")
    {
        find = {
            question: {
                $in: question
            }
        }
    }

    const list = await Answer.find(find).sort({_id: 1})

    req.sendData(list)
}


// асуулт үүсгэх
exports.create = async (req, res) =>
{

    const object = await answerService.create(req)
        .catch(
            err =>
            {
                throw new CError(err.message)
            }
        )

    // Амжилттай гэсэн мэссэж буцаана
    req.sendDataInfo("INF_001", object)
}

/**
 * асуулт update
 */
exports.update = async (req, res) =>
{
    const updatedObject = await answerService.update(req)
        .catch(
            err =>
            {
                throw new CError(err.message)
            }
        )

    // Амжилттай гэсэн мэссэж буцаана
    req.sendDataInfo("INF_002", updatedObject)
}

/**
 * delete асуулт
 */
exports.delete = async (req, res) =>
{
    const { id } = req.query

    const test = await Answer.deleteOne({ _id: id })

    if(test.deletedCount==0)
    {
        throw new CError('ERR_404')
    }

    req.sendInfo('INF_003')
}
