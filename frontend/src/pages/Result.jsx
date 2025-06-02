import { useLocation } from 'react-router-dom'

export const Result = () => {
  let surveyData = ''
  //retrieving data
  // const location = useLocation()
  // const surveyData = location.state?.surveyData

  // const {
  //   personalDetails: person,
  //   favoriteFood: meals,
  //   rating: hobbies,
  // } = surveyData

  // console.log(JSON.stringify(person, null, 2))
  // console.log(meals)
  // console.log(JSON.stringify(hobbies, null, 2))

  return (
    <>
      {surveyData ? (
        <main>
          <h1 className="result-title">Survey Results</h1>
          {/* topic section */}
          <section className="result-container">
            <section>
              <div>
                <p>Total number of surveys:</p>
                <p>Average Age:</p>
                <p>Oldest person who participated in survey:</p>
                <p>Youngest person who participated in survey:</p>
              </div>
              <div>
                <p>Percentage of people who like Pizza:</p>
                <p>Percentage of people who like Pasta:</p>
                <p>Percentage of people who like Pap and Wors:</p>
              </div>
              <div>
                <p>People who like to watch movies:</p>
                <p>People who like to listen to radio:</p>
                <p>People who like to eat out:</p>
                <p>People who like to watch TV:</p>
              </div>
            </section>
            {/* results section */}
            <section>
              <div>
                <p># total average</p>
                <p>#max age</p>
                <p>#min age</p>
              </div>

              <div>
                <p># % Pizza</p>
                <p># % Pasta</p>
                <p># % Pap and Wors</p>
              </div>

              <div>
                <p>#average of rating</p>
                <p>#average of rating</p>
                <p>#average of rating</p>
                <p>#average of rating</p>
              </div>
            </section>
          </section>
        </main>
      ) : (
        <h1 className="result-title">No Survey Data Available.</h1>
      )}
    </>
  )
}
