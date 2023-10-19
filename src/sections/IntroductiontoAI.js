import { Link } from "react-scroll";

const IntroductiontoAI = ({ handleRoute }) => {
  return (
    <div
      id="introToAI"
      data-aos="fade-right"
      className="  bg-white min-h-screen w-full flex flex-col items-center "
    >
    <div className="w-full h-full">
    <img className="  object-fit" src="/img/b4.jpg" alt="b4" />
    </div>
      <div className=" w-4/5 bg-blue-400 bg-opacity-0 flex flex-col items-center gap-4 mb-20">
        <h2 className="custom-sub-heading text-center mb-3">
          Introduction to <span className="text-red-400">AI </span> and{" "}
          <span className="text-orange-400">ML </span> with Application and
          Future
        </h2>
        <h3 className="custom-mini-sub-heading lg:text-3xl md:text-xl text-xl opacity-100 font-semibold text-green-400 mb-3">
          Massive,<span className="text-yellow-400"> Decentralized </span>{" "}
          <span className="text-red-400">Connectivity</span>
        </h3>
        <p className="custom-caption-text lg:text-xl md:text-xl sm:text-xl text-md text-gray-800">
          Machine Learning (ML) is a subset of Artificial Intelligence (AI) that
          can potentially transform various industries, including finance and
          Cryptocurrency. Unlike traditional programming, ML algorithms enable
          computers to learn and improve their performance on a specific task by
          processing and making predictions or decisions based on that data. The
          more data the algorithm is trained on, the more accurate its
          predictions become.{" "}
        </p>
        <p className="custom-caption-text text-gray-800 mb-3">
          AI and ML have already significantly impacted many industries by
          enabling machines to perform tasks that were once considered exclusive
          to humans, such as decision-making, problem-solving, and creativity.
          ML is used in various applications, including image and speech
          recognition, natural language processing, fraud detection, and
          autonomous driving. However, the rapid growth of AI and ML also raises
          important ethical, social, and economic questions that must be
          addressed.
        </p>

        {/* <button
          onClick={handleRoute}
          className="custom-button overflow-hidden relative group cursor-pointer border-2 font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-black "
        >
          <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-gray-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-white transition duration-[700ms]  ease">
            Use The Network
          </span>
        </button> */}
      </div>

      <div className="pb-4 z-1 px-4 w-full max-w-6xl flex flex-col md:flex-row md:items-stretch items-center gap-x-12 gap-y-7  mb-5">
        <div className="flex flex-col bg-gradient-to-b from-green-200 to-green-300 shadow p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-300">
          <h3 className="text-gray-900 text-xl font-bold">
            Pattern Recognition Technology
          </h3>
          <p className="text-gray-700">
            By identifying patterns early, Intelligent Signals platform employs
            AI and Machine Learning (ML) to analyse over 23,000 crypto charts
            and identify patterns.
          </p>
        </div>
        <div className=" flex flex-col  bg-gradient-to-b from-blue-200 to-blue-300 shadow p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-300">
          <h3 className="text-gray-900 text-xl font-bold">70% success rate</h3>
          <p className="text-gray-700">
            Intelligent Signals platform boasts a 70% success rate. It uses a
            pattern recognition algorithm with a 70% accuracy rate and GANN
            technical analysis.
          </p>
        </div>
        <div className="flex flex-col bg-gradient-to-b from-purple-200 to-purple-300 shadow p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-300">
          <h3 className="text-gray-900 text-xl font-bold">VST</h3>
          <p className="text-gray-700">
            VST system utilises technical analysis techniques to analyse crypto
            charts for trading cryptocurrencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductiontoAI;
