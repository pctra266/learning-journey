export default function StartScreen({ onStart }) {
    return (
      <div className="text-center pt-24">
        <h1 className="text-5xl text-white font-bold mb-6">Welcome to React Quiz Game!</h1>
        <button onClick={onStart} className="flex items-center 
			justify-center py-3 px-16 text-lg 
			font-bold  rounded-lg
			shadow-md bg-green-300 hover:bg-green-500 hover:text-white mx-auto ">
          Start
        </button>
      </div>
    );
  }
  