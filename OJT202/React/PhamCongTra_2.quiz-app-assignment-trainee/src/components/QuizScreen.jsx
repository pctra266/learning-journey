import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import questions from "../data/questions.json";

export default function QuizScreen({ onEnd }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(90);

  const question = questions[index];

  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer <= 0) endGame();
  }, [timer]);
  const handlePrevious = () => {
    if (index > 0) {
      const prevIndex = index - 1;
      setIndex(prevIndex);
      setSelected(userAnswers[prevIndex]?.selected ?? null);
    }
  };

  const handleNext = () => {
    const correctIndex = question.answers.findIndex((a) => a.correct);
    const isCorrect = selected === correctIndex;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = {
      ...question,
      selected,
      isCorrect,
    };
    setUserAnswers(updatedAnswers);
    setSelected(null);
    setIndex((i) => i + 1);
  };

  const endGame = (finalAnswers = userAnswers) => {
    const score = finalAnswers.filter((a) => a.isCorrect).length;
    onEnd(score, finalAnswers);
  };

  const formattedTime = `${String(Math.floor(timer / 60)).padStart(
    2,
    "0"
  )}:${String(timer % 60).padStart(2, "0")}`;

  return (
    <div className="w-full max-w-2xl p-6 rounded">
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrevious}
          className="flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg shadow-md w-32 bg-gray-500 hover:bg-gray-300 text-white disabled:text-gray-300 disabled:bg-gray-200  disabled:cursor-not-allowed"
          disabled={index === 0}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={index === questions.length - 1}
          className={`flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg shadow-md w-32 ${
            index === questions.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-300 hover:bg-green-500 hover:text-white"
          }`}
        >
          Next
        </button>

        {index === questions.length - 1 && (
          <button
            onClick={() => {
              const correctIndex = question.answers.findIndex((a) => a.correct);
              const isCorrect = selected === correctIndex;
              const updatedAnswers = [...userAnswers];
              updatedAnswers[index] = {
                ...question,
                selected,
                isCorrect,
              };
              endGame(updatedAnswers);
            }}
            className="flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg shadow-md bg-yellow-500 hover:bg-yellow-400 text-white w-32"
          >
            Submit
          </button>
        )}
      </div>

      <div className="relative bg-white rounded-md p-6 mt-14 shadow-md text-indigo-700 mb-6">
        <div className=" bg-white rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
          <CircularProgressbar
            value={(timer / 90) * 100}
            text={formattedTime}
            styles={buildStyles({
              textColor: "#4f46e5",
              pathColor: "#4f46e5",
              trailColor: "#eee",
              backgroundColor: "white",
            })}
          />
        </div>

        <div className="text-center text-lg font-semibold mt-12 mb-4">
          Question <span className="font-bold">{index + 1}</span> /{" "}
          {questions.length}
        </div>

        <div className="text-center text-black font-bold text-xl">
          {question.question_content}
        </div>
      </div>

      <div className="space-y-2">
        {question.answers.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full py-4 rounded-md flex items-center shadow-md my-3 px-4 cursor-pointer text-black duration-50  mx-auto border-2 hover:bg-indigo-900 hover:text-white
       ${
         selected === i
           ? "bg-indigo-900 text-white border-white"
           : "bg-white  border-none"
       }`}
          >
            {i + 1}. {opt.answer_content}
          </button>
        ))}
      </div>
    </div>
  );
}
