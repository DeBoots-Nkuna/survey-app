import { useState } from 'react'
import { submitSurveyForm } from '../utils/submitSurvey.js'
import { validateSurveyForm } from '../utils/validateSurveyForm.js'

export const SurveyForm = () => {
  // form submit state avlues
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  //question array to help create jsx elements
  const ratingQuestions = [
    { name: 'question1', label: 'I like to watch movies' },
    { name: 'question2', label: 'I like to listen to radio' },
    { name: 'question3', label: 'I like to eat out' },
    { name: 'question4', label: 'I like to watch TV' },
  ]
  const ratingValues = [1, 2, 3, 4, 5]

  const handleFormSubmit = (formData) => {
    //calling method to validate form inputs
    const errorMessage = validateSurveyForm(formData)

    if (errorMessage) {
      alert(errorMessage)
    }
    //calling submit form helper function to make a post request to the backend
    submitSurveyForm(formData)
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
          {/* rendering rating questions */}
          {ratingQuestions.map((question) => {
            return (
              <tr key={question.name}>
                <td className="rate-options">{question.label}</td>
                {/* inner map to render radio buttons */}
                {ratingValues.map((value) => {
                  return (
                    <td key={value}>
                      <input
                        type="radio"
                        name={question.name}
                        value={value}
                        required
                      />
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* submit button */}
      <button className="form-submit-btn" type="submit">
        SUBMIT
      </button>
    </form>
  )
}
