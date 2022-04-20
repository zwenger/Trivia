import styles from '../styles/Trivia.module.css';
import {useState} from "react";
import {useRouter} from "next/router";

function Trivia({questions}) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleSelect = async (answer) => {
    setSelectedAnswers([(selectedAnswers[currentQuestion] = {
      questionId: questions[currentQuestion].id,
      answerByUser: answer
    }),])
    setSelectedAnswers([...selectedAnswers])
    setCurrentQuestion(currentQuestion + 1)
    if (currentQuestion + 1 === questions.length) {
      const response = await fetch('http://localhost:3000/api/trivia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedAnswers)
      })
      const result = await response.json();
      console.log(result)
      await router.push({
        pathname: 'trivia/result',
        query: {
          score: result.data.score
        }
      })
    }
  }

  return (
    <>
      {currentQuestion + 1 <= questions.length ? (
        <div className={styles.container}>
          <div className={styles.question}>
            {questions[currentQuestion]?.question}
          </div>
          {questions[currentQuestion]?.answers.map((answer, index) => (
            <button
              key={index}
              className={styles.button}
              // onClick={() => setCurrentQuestion(currentQuestion + 1)}
              onClick={() => handleSelect(answer)}
            >
              <p>{answer?.text}</p>
            </button>
          ))}
          <div className={styles.step}> {currentQuestion + 1} de {questions.length}</div>
        </div>
      ) : <div className={styles.container}>Loading...</div>}
    </>
  )
}


export default Trivia;