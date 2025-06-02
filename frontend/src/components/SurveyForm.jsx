import { useNavigate } from 'react-router-dom'

export const SurveyForm = () => {
  const navigate = useNavigate()

  const handleFormSubmit = (formData) => {
    //collecting user data

    const person = {
      fullName: formData.get('fullNames'),
      email: formData.get('email'),
      dateOfBirth: formData.get('dateOfBirth'),
      contactNumber: formData.get('contactNumber'),
    }
    //validating user age
    const currentDate = new Date()
    const userBirthDate = new Date(person.dateOfBirth)

    const age = currentDate.getFullYear() - userBirthDate.getFullYear()

    if (age < 5 || age > 120) {
      alert('Age must be between 5 and 120.')
      return
    }

    let favMeals = formData.getAll('favoriteFood')

    //checking if user checked atleast one box
    if (favMeals.length === 0) {
      alert('Please select at least one favorite meal.')
      return
    }

    let entertainmentRating = {
      movies: Number(formData.get('question1')),
      radio: Number(formData.get('question2')),
      eatOut: Number(formData.get('question3')),
      tv: Number(formData.get('question4')),
    }

    // storing data
    const surveyData = {
      personalDetails: person,
      favoriteFood: favMeals,
      rating: entertainmentRating,
    }

    //passing data [ static data testing ]
    navigate('/results', { state: { surveyData } })

    console.log('Survey Data: ', JSON.stringify(surveyData, null, 2))
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
