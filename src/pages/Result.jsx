export const Result = () => {
  return (
    <main>
      <h1>Survey Results</h1>
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
            <p>#Survey</p>
            <p>#average age</p>
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
  )
}
