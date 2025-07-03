export default function EndScreen({ score, onRetry, onReview }) {
    return (
      <div className="text-center  pt-16">
        <h2 className="text-3xl text-white">Your score is: <span className="font-bold">{score}</span></h2>
        <div className="flex justify-center items-center gap-4">
          <button className="flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-green-300 hover:bg-green-500 hover:text-white mt-5 undefined" onClick={onRetry}>Try again</button>
          <button className="flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-red-500 hover:bg-red-400 text-white mt-5 undefined" onClick={onReview}>Review</button>
        </div>
      </div>
    );
  }
  