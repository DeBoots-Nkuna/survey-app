export const analyzeSurveyData = (dataSurveys) => {
  if (!Array.isArray(dataSurveys) || dataSurveys.length === 0) {
    return null
  }
  //total number of survey
  const totalSurveys = dataSurveys.length

  //gathering age for each person
  const userAges = dataSurveys.map((entry) => {
    const birthDate = new Date(entry.date_of_birth)
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthDate.getFullYear()
    return age
  })

  //calculating age average
  const totalAge = userAges.reduce((sum, age) => {
    return sum + age
  }, 0)
  const averageAge = (totalAge / totalSurveys).toFixed(1)

  //determining the oldest person and youngest person participated

  const oldestAge = Math.max(...userAges)
  const youngestAge = Math.min(...userAges)

  //filtering out favorite food empty strings
  const pizzaFavs = dataSurveys.filter((entry) => {
    entry.favorite_foods?.toLowerCase().includes('pizza')
  })
  const pastaFavs = dataSurveys.filter((entry) => {
    entry.favorite_foods?.toLowerCase().includes('pasta')
  })
  const papAndWorsFavs = dataSurveys.filter((entry) => {
    entry.favorite_foods?.toLowerCase().includes('pap and wors')
  })

  const pizzaPercentage = (pizzaFavs.length / totalSurveys).toFixed(1)
  const pastaPercentage = (pastaFavs.length / totalSurveys).toFixed(1)
  const papAndWorsPercentage = (papAndWorsFavs.length / totalSurveys).toFixed(1)

  //method to calculate average rating and handling empty values
  const averageRating = (key) => {
    let sum = 0
    for (let entry of dataSurveys) {
      sum += Number(entry[key]) || 0
    }
    const average = sum / totalSurveys
    return average.toFixed(1)
  }

  const averageMovies = averageRating('rate_movies')
  const averageRadio = averageRating('rate_radio')
  const averageEatOut = averageRating('rate_eat_out')
  const averageTV = averageRating('rate_tv')

  //returning analyzed data

  return {
    totalSurvey: totalSurveys,
    averageAge: averageAge,
    oldestAge: oldestAge,
    youngestAge: youngestAge,
    pizzaPercentage: pizzaPercentage,
    pastaPercentage: pastaPercentage,
    papAndWorsPercentage: papAndWorsPercentage,
    averageMovies: averageMovies,
    averageRadio: averageRadio,
    averageEatOut: averageEatOut,
    averageTv: averageTV,
  }
}
