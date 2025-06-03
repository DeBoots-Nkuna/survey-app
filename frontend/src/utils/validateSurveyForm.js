//method to validate form inputs

export const validateSurveyForm = (formData) => {
  const fullName = formData.get('fullNames')
  const email = formData.get('email')
  const dateOfBirth = formData.get('dateOfBirth')
  const contactNumber = formData.get('contactNumber')

  //checking for blank input fields in personal details
  if (!fullName || !email || !dateOfBirth || !contactNumber) {
    return 'Please fill in all personal details'
  }

  //validating if user's age is within range NOT < 5 and NOT > 120
  const currentDate = new Date()
  const birthYear = new Date(dateOfBirth)

  const age = currentDate.getFullYear() - birthYear.getFullYear()

  if (age < 5 || age > 120) {
    return 'Age must be between 5 and 120.'
  }

  let favMeals = formData.getAll('favoriteFood')

  //checking if user checked at least one check box
  if (favMeals.length === 0) {
    return 'Please select at least one favorite meal.'
  }

  //checking if user selected a rating for each question
  const movies = Number(formData.get('question1'))
  const radio = Number(formData.get('question2'))
  const eatOut = Number(formData.get('question3'))
  const tv = Number(formData.get('question4'))

  if (!movies || !radio || !eatOut || !tv) {
    return 'please answer all rating questions.'
  }

  //returning null when all conditions are met
  return null
}
