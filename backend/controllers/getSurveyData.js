import { getAllSurveys } from '../storage/surveyStore.js'

export const getAllSurvey = async (req, res) => {
  try {
    const surveys = await getAllSurveys()

    res.json(surveys)
  } catch (error) {
    console.error('Error occurred while fetching surveys: ', error)
    res.statusCode = 500
    res.json({ error: 'Server error occurred while fetching surveys.' })
  }
}
