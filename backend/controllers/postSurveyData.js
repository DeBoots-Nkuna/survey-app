import { saveSurvey } from '../storage/surveyStore.js'

//controller to sav survey data
export const saveSurveyData = async (req, res) => {
  try {
    //object destructuring to collect sent data
    const {
      fullName,
      email,
      dateOfBirth,
      contactNumber,
      favoriteFoods,
      rating,
    } = req.body

    if (!Array.isArray(favoriteFoods) || favoriteFoods.length === 0) {
      return res.status(400).json({
        error: 'At least one favorite food must be selected.',
      })
    }

    const savedSurvey = await saveSurvey({
      fullName,
      email,
      dateOfBirth,
      contactNumber,
      favoriteFoods,
      rating,
    })

    //sending back response
    res.statusCode = 201
    res.json({
      message: 'Successfully saved survey form.',
      surveyId: savedSurvey.id,
    })
  } catch (error) {
    console.error('Error occurred while saving survey: ', error)
    res.statusCode = 500
    res.json({ error: 'Server error while saving survey form.' })
  }
}
