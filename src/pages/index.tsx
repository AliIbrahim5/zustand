import Image from "next/image";
import { Inter } from "next/font/google";
import useStore, { count } from "../store/store";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { playerState, setPlayerState } = useStore((state) => state);
  const {
    count: countState,
    setNumber,
    theNumber,
    setString,
    count: currentCount,
  } = count((state) => state);

  const handlePlayerDeath = () => {
    setPlayerState("مات");
  };

  const handleCount = () => {
    setNumber(currentCount + 1);
    setString("في ازدياد");
  };

  const handleCountDecrease = () => {
    setNumber(currentCount - 1);
    setString("في تناقص");
  };

  const handlePlayerAlive = () => {
    setPlayerState("على قيد الحياة");
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <p>حالة اللاعب: {playerState}</p>
        <button
          onClick={handlePlayerDeath}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          قتل اللاعب
        </button>

        <button
          onClick={handlePlayerAlive}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          انعاش اللاعب
        </button>
        <div>
          <p>الحالة: {theNumber}</p>
          <p>العداد: {countState} </p>

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleCount}
          >
            زيادة
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleCountDecrease}
          >
            نقصان
          </button>
        </div>
      </div>
    </main>
  );
}
