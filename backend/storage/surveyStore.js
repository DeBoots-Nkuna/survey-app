import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataFilePath = path.resolve(__dirname, '../data/surveys.json')

const ensureDataFile = async () => {
  try {
    await fs.access(dataFilePath)
  } catch {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true })
    await fs.writeFile(dataFilePath, '[]\n')
  }
}

export const getAllSurveys = async () => {
  await ensureDataFile()
  const content = await fs.readFile(dataFilePath, 'utf8')
  return JSON.parse(content)
}

export const saveSurvey = async ({
  fullName,
  email,
  dateOfBirth,
  contactNumber,
  favoriteFoods,
  rating,
}) => {
  const surveys = await getAllSurveys()
  const survey = {
    id: surveys.at(-1)?.id + 1 || 1,
    full_name: fullName,
    email,
    date_of_birth: dateOfBirth,
    contact_number: contactNumber,
    favorite_foods: favoriteFoods.join(','),
    rate_movie: rating.movie,
    rate_radio: rating.radio,
    rate_eat_out: rating.eatOut,
    rate_tv: rating.tv,
    created_at: new Date().toISOString(),
  }

  surveys.push(survey)
  await fs.writeFile(dataFilePath, `${JSON.stringify(surveys, null, 2)}\n`)
  return survey
}
