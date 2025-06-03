export async function submitSurveyForm(formData) {
  //building survey data object
  const surveyData = {
    fullName: formData.get('fullNames'),
    email: formData.get('email'),
    dateOfBirth: formData.get('dateOfBirth'),
    contactNumber: formData.get('contactNumber'),
    favoriteFoods: formData.getAll('favoriteFood'),
    rating: {
      movies: Number(formData.get('question1')),
      radio: Number(formData.get('question2')),
      eatOut: Number(formData.get('question3')),
      tv: Number(formData.get('question4')),
    },
  }

  //try catch to make post request

  try {
    const response = await fetch('http://localhost:8000/api/surveys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(surveyData),
    })

    if (!response.ok) {
      throw new Error(`Status ${response.status}`)
    }
    //collecting returned response
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Submitting of form failed: ', error)
    return null
  }
}
