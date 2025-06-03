import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { submitSurveyForm } from '../utils/submitSurvey.js'

export const SurveyForm = () => {
  const navigate = useNavigate()

  const [submitting, setSubmitting] = useState(false)

  const handleFormSubmit = (formData) => {
    const fullName = formData.get('fullNames')
    const email = formData.get('email')
    const dateOfBirth = formData.get('dateOfBirth')
    const contactNumber = formData.get('contactNumber')

    //checking for blank input fields in personal details
    if (!fullName || !email || !dateOfBirth || !contactNumber) {
      alert('Please fill in all personal details')
    }

    //validating if user's age is within range NOT < 5 and NOT > 120
    const currentDate = new Date()
    const birthYear = new Date(dateOfBirth)

    const age = currentDate.getFullYear() - birthYear.getFullYear()

    if (age < 5 || age > 120) {
      alert('Age must be between 5 and 120.')
      return
    }

    let favMeals = formData.getAll('favoriteFood')

    //checking if user checked at least one check box
    if (favMeals.length === 0) {
      alert('Please select at least one favorite meal.')
      return
    }

    //checking if user selected a rating for each question
    const movies = Number(formData.get('question1'))
    const radio = Number(formData.get('question2'))
    const eatOut = Number(formData.get('question3'))
    const tv = Number(formData.get('question4'))

    if (!movies || !radio || !eatOut || !tv) {
      alert('please answer all rating questions.')
      return
    }

    //calling submit form helper function to make a post request to the backend
    submitSurveyForm(formData, navigate)
  }

  return (
    <form action={handleFormSubmit}>
      {/* personal details section */}
      <section className="personal-details">
        <p>Personal Details: </p>
        <div>
          <label htmlFor="fullNames"> Full Names</label>
          <br />
          <input type="text" id="fullNames" name="fullNames" required />
          <br />
          <label html="email">Email</label>
          <br />
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <br />
          <input type="date" id="dateOfBirth" name="dateOfBirth" required />
          <br />
          <label htmlFor="contactNumber">Contact Number</label>
          <br />
          <input type="tel" id="contactNumber" name="contactNumber" required />
        </div>
      </section>

      {/* favorite food section */}

      <section className="favorite-food">
        <p>What is your favorite food?</p>
        <div className="favorite-food-options">
          <input type="checkbox" id="pizza" name="favoriteFood" value="pizza" />
          <label htmlFor="pizza">Pizza</label>
          <input type="checkbox" id="pasta" name="favoriteFood" value="pasta" />
          <label htmlFor="Pasta">Pasta</label>
          <input
            type="checkbox"
            id="papAndWors"
            name="favoriteFood"
            value="pap and wors"
          />
          <label htmlFor="papAndWors">Pap and Wors</label>
          <input type="checkbox" id="other" name="favoriteFood" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </section>

      {/* rating section */}
      <table className="rate-table">
        <thead>
          <tr>
            <th></th>
            <th>Strongly Agree</th>
            <th>Agree</th>
            <th>Neutral </th>
            <th>Disagree</th>
            <th>Strongly Disagree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="rate-options">I like to watch movies</td>
            <td>
              <input type="radio" name="question1" value="1" required />
            </td>
            <td>
              <input type="radio" name="question1" value="2" required />
            </td>
            <td>
              <input type="radio" name="question1" value="3" required />
            </td>
            <td>
              <input type="radio" name="question1" value="4" required />
            </td>
            <td>
              <input type="radio" name="question1" value="5" required />
            </td>
          </tr>
          <tr>
            <td className="rate-options">I like to listen to radio</td>
            <td>
              <input type="radio" name="question2" value="1" required />
            </td>
            <td>
              <input type="radio" name="question2" value="2" required />
            </td>
            <td>
              <input type="radio" name="question2" value="3" required />
            </td>
            <td>
              <input type="radio" name="question2" value="4" required />
            </td>
            <td>
              <input type="radio" name="question2" value="5" required />
            </td>
          </tr>
          <tr>
            <td className="rate-options">I like to eat out</td>
            <td>
              <input type="radio" name="question3" value="1" required />
            </td>
            <td>
              <input type="radio" name="question3" value="2" required />
            </td>
            <td>
              <input type="radio" name="question3" value="3" required />
            </td>
            <td>
              <input type="radio" name="question3" value="4" required />
            </td>
            <td>
              <input type="radio" name="question3" value="5" required />
            </td>
          </tr>
          <tr>
            <td className="rate-options">I like to watch TV</td>
            <td>
              <input type="radio" name="question4" value="1" required />
            </td>
            <td>
              <input type="radio" name="question4" value="2" required />
            </td>
            <td>
              <input type="radio" name="question4" value="3" required />
            </td>
            <td>
              <input type="radio" name="question4" value="4" required />
            </td>
            <td>
              <input type="radio" name="question4" value="5" required />
            </td>
          </tr>
        </tbody>
      </table>
      {/* submit button */}
      <button className="form-submit-btn" type="submit">
        SUBMIT
      </button>
    </form>
  )
}
