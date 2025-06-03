//method to validate form inputs

export const validateSurveyForm = (formData) => {
  const fullName = formData.get('fullNames')
  const email = formData.get('email')
  const dateOfBirth = formData.get('dateOfBirth')
  const contactNumber = formData.get('contactNumber')

  //checking for dateOfBirth

  if (!dateOfBirth) {
    return 'Please enter your date of birth.'
  }

  //calculating age
  const currentDate = new Date()
  const birthYear = new Date(dateOfBirth)

  const age = currentDate.getFullYear() - birthYear.getFullYear()

  //checking for age restriction
  if (age < 5 || age > 120) {
    return 'Age must be between 5 and 120.'
  } else {
    //proceeding with validation when age range is met

    if (!fullName || !email || !dateOfBirth || !contactNumber) {
      return 'Please fill in all personal details'
    }

    //validating if at least one check box is selected
    let favMeals = formData.getAll('favoriteFood')
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
}
