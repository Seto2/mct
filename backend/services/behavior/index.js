// models
const Behavior = require('../../models/behavior')


/**
 * Зан чанрын мэдээллийг баазд бүртгүүлэх
 * @param {Object} behaviorBody зан чанарийн мэдээлэл
 * @returns  баазад үүссэн дата
 */
exports.createBehavior = async (behaviorBody) =>
{
    const behavior = await Behavior.create(behaviorBody)
        .catch((err) =>
        {
            throw new Error("ERR_001")
        })

    return behavior
}

/**
 * Зан төлөвийн мэдээлэл засах
 * @param {*} id                id
 * @param {*} behaviorBody      засах мэдээлэл
 */
exports.updateBehavior = async (id, behaviorBody) =>
{
    console.log(id)
    console.log(behaviorBody)
    const updatedBehavior = await Behavior.updateOne(
        {
            _id: id
        },
        behaviorBody
    )

    return updatedBehavior
}
