import { useState } from 'react'
import { submitSurveyForm } from '../utils/submitSurvey.js'
import { validateSurveyForm } from '../utils/validateSurveyForm.js'
import { MessageModal } from './modal/MessageModal.jsx'
import { Loader } from './loader/Loader.jsx'

export const SurveyForm = () => {
  //state values
  const [isloading, setIsLoading] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  //question and rating values arrays to help create jsx elements
  const ratingQuestions = [
    { name: 'question1', label: 'I like to watch movies' },
    { name: 'question2', label: 'I like to listen to radio' },
    { name: 'question3', label: 'I like to eat out' },
    { name: 'question4', label: 'I like to watch TV' },
  ]
  const ratingValues = [1, 2, 3, 4, 5]

  // handle form submit method
  const handleFormSubmit = async (formData) => {
    //validating other input fields when age range is met
    const errorMessage = validateSurveyForm(formData)

    if (errorMessage) {
      setModalMessage(errorMessage)
      setShowModal(true)
      return
    }
    //change state to display loader UI
    setIsLoading(true)

    try {
      //calling submit form helper function to make a post request to the backend
      const response = await submitSurveyForm(formData)

      setTimeout(() => {
        //change state to hide loader UI
        setIsLoading(false)

        if (response?.message) {
          setModalMessage(response.message)
        } else {
          setModalMessage('Survey submitted, but no message returned.')
        }
        setShowModal(true)
      }, 1500)
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false)
        setModalMessage('An error has occurred, ', error)
        showModal(true)
      }, 1500)
    }
  }

  return (
    <>
      {/* error message modal*/}
      {showModal && (
        <MessageModal
          message={modalMessage}
          toggleModal={() => setShowModal(false)}
        />
      )}

      {/* Loading  */}
      {isloading && <Loader />}

      <form action={handleFormSubmit}>
        {/* Personal details section */}
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
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              required
            />
          </div>
        </section>

        {/* Favorite food section */}

        <section className="favorite-food">
          <p>What is your favorite food?</p>
          <div className="favorite-food-options">
            <input
              type="checkbox"
              id="pizza"
              name="favoriteFood"
              value="pizza"
            />
            <label htmlFor="pizza">Pizza</label>
            <input
              type="checkbox"
              id="pasta"
              name="favoriteFood"
              value="pasta"
            />
            <label htmlFor="Pasta">Pasta</label>
            <input
              type="checkbox"
              id="papAndWors"
              name="favoriteFood"
              value="pap and wors"
            />
            <label htmlFor="papAndWors">Pap and Wors</label>
            <input
              className="check-boxes"
              type="checkbox"
              id="other"
              name="favoriteFood"
              value="other"
            />
            <label htmlFor="other">Other</label>
          </div>
        </section>
        <p className="rate-caption">
          Please rate your level of agreement on a scale from 1 to 5, with 1
          being "strongly agree" and 5 being "strongly disagree."
        </p>
        {/* Rating section */}
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
            {/* Rendering rating questions */}
            {ratingQuestions.map((question) => {
              return (
                <tr key={question.name}>
                  <td
                    style={{
                      textAlign: 'justify',
                      paddingLeft: '8px',
                      fontSize: '15px',
                      width: '200px',
                    }}
                  >
                    {question.label}
                  </td>
                  {/* Inner map to render radio buttons */}
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
    </>
  )
}
