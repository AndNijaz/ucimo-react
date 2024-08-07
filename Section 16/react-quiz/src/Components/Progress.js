import { useQuiz } from "../Context/QuizContext";

function Progress() {
  const { index, numOfQuestions, maxPossiblePoints, answer, points } =
    useQuiz();

  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong>/{numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
