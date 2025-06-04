import { connectionPool } from '../config/dbConnection.js'

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

    //storing data to database

    const insertQuery = `INSERT INTO survey 
        (full_name, email, date_of_birth, contact_number, favorite_foods, rate_movie, rate_radio, rate_eat_out, rate_tv)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    const [result] = await connectionPool.execute(insertQuery, [
      fullName,
      email,
      dateOfBirth,
      contactNumber,
      favoriteFoods.join(','),
      rating.movie,
      rating.radio,
      rating.eatOut,
      rating.tv,
    ])

    //sending back response
    res.statusCode = 201
    res.json({
      message: 'Successfully saved survey form.',
      surveyId: result.insertId,
    })
  } catch (error) {
    console.error('Error occurred while saving survey: ', error)
    res.statusCode = 500
    res.json({ error: 'Server error while saving survey form.' })
  }
}
