import { connectionPool } from '../config/dbConnection.js'

export const getAllSurvey = async (req, res) => {
  try {
    //collecting all survey data
    const [rows] = await connectionPool.query('SELECT * from survey')

    //returning response
    res.json(rows)
  } catch (error) {
    console.error('Error occurred while fetching surveys: ', error)
    res.statusCode = 500
    res.json({ error: 'Server error occurred while fetching surveys.' })
  }
}
