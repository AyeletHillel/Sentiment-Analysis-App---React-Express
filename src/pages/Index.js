
import '../App.css';
import getSentiment from '../getSentiment';
import { Link, useLoaderData } from "react-router-dom"

const Index = () => {

const results = useLoaderData()

  return (
    <div className="App">
      <h2>Sentiment Analysis App</h2>
      <p>Enter text for real time analysis</p>
      {/* <textarea onChange={findSentiment} />
      <p>Sentiment Score: {sentimentScore}</p>
      <p>General Sentiment: {generalSentiment}</p> */}

      <h2>History</h2>

      {results.map((result) => (
        <div key={result._id} className="result">
          <Link to={`/${result._id}`}>
            <h1>{result.input}</h1>
          </Link>
        </div>
      ))}
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