import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function QuizPage({ category, name, onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [time, setTime] = useState(60);

  const hasSubmitted = useRef(false);
  const timerRef = useRef(null);

  // Load Questions
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/questions/${category}`)
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, [category]);

  // Start Timer
  useEffect(() => {
    if (questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          forceSubmit(); // AUTO SUBMIT
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [questions]);

  // Select answer
  const selectAnswer = (qid, option) => {
    setAnswers((prev) => ({
      ...prev,
      [qid]: option,
    }));
  };

  // FORCE SUBMIT (cannot fail)
  const forceSubmit = () => {
    if (hasSubmitted.current) return;

    hasSubmitted.current = true;
    clearInterval(timerRef.current);

    axios
      .post("http://localhost:5000/api/submit", {
        name,
        category,
        answers,
      })
      .then((res) => {
        onFinish(res.data); // redirect
      })
      .catch((err) => {
        console.error("Submit failed:", err);
        // Even if backend fails, still redirect with zero score
        onFinish({ score: 0, total: questions.length });
      });
  };

  const progress =
    questions.length > 0
      ? (Object.keys(answers).length / questions.length) * 100
      : 0;

  return (
    <div className="quiz">
      <h2>{category} Quiz</h2>
      <h3>Time Left: {time}s</h3>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: progress + "%" }}
        ></div>
      </div>

      {questions.map((q) => (
        <div className="question-card" key={q.id}>
          <p>{q.question}</p>

          <div className="options">
            {[q.option1, q.option2, q.option3, q.option4].map((opt) => (
              <button
                key={opt}
                type="button"
                className={
                  answers[q.id] === opt ? "option selected" : "option"
                }
                onClick={() => selectAnswer(q.id, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        type="button"
        className="submit-btn"
        onClick={forceSubmit}
      >
        Submit Quiz
      </button>
    </div>
  );
}