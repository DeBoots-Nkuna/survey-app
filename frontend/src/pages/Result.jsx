import { useEffect, useState } from 'react'
import { analyzeSurveyData } from '../utils/analyzeSurveyData.js'
import { fetchSurveyData } from '../utils/fetchSurveyData.js'
import { Loader } from '../components/loader/Loader.jsx'

export const Result = () => {
  //data state values
  const [analyzedData, setAnalyzedData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)

      //calling method to make get request
      const data = await fetchSurveyData()

      if (data && data.length > 0) {
        console.log('data from db: ', data)

        //calling method to analyze data
        const result = analyzeSurveyData(data)

        console.log('analyzed data: ', result)
        //updating state with retrieved data
        // setSurveyData(data)
        setAnalyzedData(result)
      } else {
        setAnalyzedData(null)
      }

      //ending loading display after processing
      setTimeout(() => setIsLoading(false), 1000)
    }

    //calling getData method
    getData()
  }, [])

  return (
    <>
      {/* loading */}
      {isLoading ? (
        <Loader />
      ) : analyzedData ? (
        <main>
          <h1 className="result-title">Survey Results</h1>
          {/* titles section */}
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
                <p>{analyzedData.totalSurvey}</p>
                <p>{analyzedData.averageAge}</p>
                <p>{analyzedData.oldestAge}</p>
                <p>{analyzedData.youngestAge}</p>
              </div>

              <div>
                <p>{analyzedData.pizzaPercentage}%</p>
                <p>{analyzedData.pastaPercentage}%</p>
                <p>{analyzedData.papAndWorsPercentage}%</p>
              </div>

              <div>
                <p>{analyzedData.averageMovie}</p>
                <p>{analyzedData.averageRadio}</p>
                <p>{analyzedData.averageEatOut}</p>
                <p>{analyzedData.averageTv}</p>
              </div>
            </section>
          </section>
        </main>
      ) : (
        <h1 className="result-title">No Surveys Available.</h1>
      )}
    </>
  )
}
