import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import EndScreen from "./components/EndScreen";
import ReviewScreen from "./components/ReviewScreen";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const startGame = () => {
    setScore(0);
    setAnswers([]);
    setScreen("quiz");
  };

  const endGame = (finalScore, userAnswers) => {
    setScore(finalScore);
    setAnswers(userAnswers);
    setScreen("end");
  };

  const restartGame = () => {
    setScore(0);
    setAnswers([]);
    setScreen("start");
  };

  return (
    <div className="min-h-screen flex justify-center bg-[#A5B4FC] p-6">
      {screen === "start" && <StartScreen onStart={startGame} />}
      {screen === "quiz" && <QuizScreen onEnd={endGame} />}
      {screen === "end" && (
        <EndScreen
          score={score}
          onRetry={startGame}
          onReview={() => setScreen("review")}
        />
      )}
      {screen === "review" && (
        <ReviewScreen answers={answers} onRestart={restartGame} />
      )}
    </div>
  );
}
