// models
const Question = require('../../models/question')


/**
 * Асуулт мэдээллийг баазд бүртгүүлэх
 * @param {Object} questionBody асуултын мэдээлэл
 * @returns  баазад үүссэн дата
 */
exports.create = async (req) =>
{
    const { question, options } = req.body

    const newQuestion = new Question({
      question,
      options: options.map(option => ({
        answer: option.answer,
        behavior: option.behavior
      }))
    })

    const createdQuestion = await newQuestion.save()

    return createdQuestion
}

/**
 * Асуулт мэдээлэл засах
 * @param {*} id                id
 */
exports.update = async (req) =>
{
    const questionId = req.query?.id
    const { question, options } = req.body

    const existingQuestion = await Question.findById(questionId)

    if (!existingQuestion) {
        throw new Error("ERR_404")
    }

    if(typeof question !== "undefined")
    {
        existingQuestion.question = question
    }
    if(typeof options !== "undefined")
    {
        existingQuestion.options = options.map(option => ({
            answer: option.answer,
            behavior: option.behavior
        }))
    }

    const updatedQuestion = await existingQuestion.save()

    return updatedQuestion
}
