export const fetchSurveyData = async () => {
  try {
    //GET request to fetch all survey data
    const response = await fetch('http://localhost:8000/api/surveys', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    //collecting survey data
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching survey data: ', error.message)
    return null
  }
}
