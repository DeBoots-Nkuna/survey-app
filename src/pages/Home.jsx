import { SurveyForm } from '../components/SurveyForm'

export const Home = () => {
  return (
    <main className="main-content">
      {/* personal details section */}
      <section className="personal-details form-section">
        <form>
          <section className="personal-details">
            <p>Personal Details: </p>
            <div>
              <label htmlFor="fullName"> Full Names</label>
              <br />
              <input type="text" id="fullName" name="fullName" required />
              <br />
              <label html="email">Email</label>
              <br />
              <input type="email" id="email" name="email" required />
              <br />
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <br />
              <input type="data" id="dateOfBirth" name="dateOfBirth" required />
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
                type="checkbox"
                id="other"
                name="favoriteFood"
                value="other"
              />
              <label htmlFor="other">Other</label>
            </div>
          </section>

          <section className="rat-section">
            <p>
              Please rate your level of agreement on a scale from 1 to 5, with 1
              bing "strongly agree" and 5 being "strongly disagree
            </p>
            <table className="rate-table">
              <thead>
                <th></th>
                <th>Strongly Agree</th>
                <th>Agree</th>
                <th>Neutral </th>
                <th>Disagree</th>
                <th>Strongly Disagree</th>
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
          </section>
          <button className="form-submit-btn" type="submit">
            SUBMIT
          </button>
        </form>
      </section>
    </main>
  )
}
