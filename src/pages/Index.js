import '../App.css';
import getSentiment from '../getSentiment';
import { Link, useLoaderData } from "react-router-dom"
import { useState } from 'react';
import { createResult } from '../actions';

const Index = () => {

  const results = useLoaderData();

  const [sentimentScore, setSentimentScore] = useState(null);
  const [generalSentiment, setGeneralSentiment] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const [score, sentiment] = getSentiment(event.target.input.value);
    setSentimentScore(score);
    setGeneralSentiment(sentiment);
    createResult({ input: event.target.input.value, score, sentiment });
  };

  return (
<div className="mx-auto p-10 bg-gray-900 text-gray-900 dark:bg-gray-800 dark:text-white">
  <h2 className="text-3xl font-bold text-blue-500 mb-5">Sentiment Analysis App</h2>
  <form onSubmit={handleSubmit} className="mb-4">
  <label className="block mb-5">
    Enter text for real time analysis
  </label>
  <textarea
    name="input"
    rows="4"
    className=" mx-auto  max-w-lg block w-full p-2.5 text-bg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-400 text-gray-900 dark:text-white mb-5"
  />
  <button
    type="submit"
    className="inline-flex items-center justify-center p-2 text-sm font-medium text-white bg-gradient-to-br from-green-400 to-blue-600 rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
  >
    Analyze
  </button>
</form>
  <p className="mb-2">
    Sentiment Score: <span className={sentimentScore < 0 ? 'text-red-500' : 'text-green-500'}>{sentimentScore}</span>
  </p>
  <p className="mb-4">
    General Sentiment: <span className={generalSentiment === 'positive' ? 'text-green-500' : generalSentiment === 'negative' ? 'text-red-500' : 'text-yellow-500'}>{generalSentiment}</span>
  </p>
  <div className="mt-8">
<h2 className="text-2xl font-bold mb-4 font-serif relative">
  <span className="pr-2">History</span>
  <span className="inline-block w-4 h-4 bg-gray-700 rotate-45 transform -translate-y-2 border-gray-700 border-r-2 border-b-2 absolute left-0"></span>
</h2>
  {results.slice(Math.max(results.length - 10, 0)).map((result) => (
    <div key={result._id} className="result mb-4">
      <Link to={`/${result._id}`} className="text-lg font-medium text-blue-400 hover:underline">
        <h3>{result.input} {result.sentiment === 'negative' && <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>} 
        {result.sentiment === 'positive' && <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>}
        {result.sentiment === 'neutral' && <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>}</h3>
      </Link>
    </div>
  ))}
</div>
</div>


  );
};

export default Index;



// {
//   "_id": "6416446602b44a1b0ebe3567",
//   "input": "Do you believe in magic?",
//   "score": 3,
//   "sentiment": "positive",
//   "__v": 0
// }