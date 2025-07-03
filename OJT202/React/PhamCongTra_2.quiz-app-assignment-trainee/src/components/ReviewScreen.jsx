import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ReviewScreen({ answers, onRestart }) {
  const [index, setIndex] = useState(0);
  const question = answers[index];

  const handleNext = () => {
    if (index < answers.length - 1) setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const correctIndex = question.answers.findIndex((a) => a.correct);

  return (
    <div className="w-full max-w-2xl p-6 rounded">
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg shadow-md w-32 bg-gray-500 hover:bg-gray-300 text-white disabled:text-gray-300 disabled:bg-gray-200  disabled:cursor-not-allowed"
          disabled={index === 0}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={index === answers.length - 1}
          className={`flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg shadow-md w-32 ${
            index === answers.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-300 hover:bg-green-500 hover:text-white"
          }`}
        >
          Next
        </button>

        <button
          onClick={onRestart}
          className="flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg shadow-md bg-yellow-500 hover:bg-yellow-400 text-white w-32"
        >
          Restart
        </button>
      </div>

      <div className="relative bg-white rounded-md p-6 mt-14 shadow-md text-indigo-700 mb-6">
        <div className="bg-white rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
          <CircularProgressbar
            value={100}
            text={"End!"}
            styles={buildStyles({
              textColor: "#dc2626",
              pathColor: "#4f46e5",
              trailColor: "#eee",
              backgroundColor: "white",
              background: true,
            })}
          />
        </div>

        <div className="text-center text-black font-bold text-sm py-5">
          <div className="text-indigo-700 font-semibold">
            Question {index + 1} / {answers.length}
          </div>

          <div className="font-bold text-lg text-black">
            {question.question_content}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {question.answers.map((opt, i) => {
          const isCorrect = i === correctIndex;
          const isSelected = i === question.selected;

          let style = "bg-white";
          if (isCorrect) style = "bg-[#10B981] text-white";
          else if (isSelected && !isCorrect) style = "bg-[#EF4444] text-white";

          return (
            <div
              key={i}
              className={`font-semibold border-none w-full py-4 rounded-md flex items-center shadow-md my-3 px-4 cursor-pointer text-black duration-50  mx-auto border-2 ${style}`}
            >
              {i + 1}) {opt.answer_content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
