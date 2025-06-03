import express from 'express'
import { saveSurveyData } from '../controllers/postSurveyData.js'
import { getAllSurvey } from '../controllers/getSurveyData.js'

//creating router instance
export const apiRouter = express.Router()

//POST endpoint /api/surveys
apiRouter.post('/', saveSurveyData)
apiRouter.get('/results', getAllSurvey)
