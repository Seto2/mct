// models
const Answer = require('../../models/answer')


/**
 * Асуулт мэдээллийг баазд бүртгүүлэх
 * @param {Object} questionBody асуултын мэдээлэл
 * @returns  баазад үүссэн дата
 */
exports.create = async (req) =>
{
    const { description, behaviorList } = req.body

    const newAnswer = new Answer({
      description,
      behaviorList: behaviorList.map(option => ({
        index: option.index,
        behavior: option.behavior
      }))
    })

    const createdAnswer = await newAnswer.save()

    return createdAnswer
}

/**
 * Асуулт мэдээлэл засах
 * @param {*} id                id
 */
exports.update = async (req) =>
{
    const questionId = req.query?.id
    const { description, behaviorList } = req.body

    const existingAnswer = await Answer.findById(questionId)

    if (!existingAnswer) {
        throw new Error("ERR_404")
    }

    if(typeof description !== "undefined")
    {
        existingAnswer.description = description
    }
    if(typeof behaviorList !== "undefined")
    {
        existingAnswer.behaviorList = behaviorList.map(option => ({
            index: option.index,
            behavior: option.behavior
        }))
    }

    const updatedAnswer = await existingQuestion.save()

    return updatedAnswer
}
