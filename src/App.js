import { Component } from 'react'
import Sentiment from 'sentiment'
import './App.css'

const sentiment = new Sentiment()

// Returned Objects
// Score: Score calculated by adding the sentiment values of recognized words.
// Comparative: Comparative score of the input string.
// Calculation: An array of words that have a negative or positive valence with their respective AFINN score.
// Token: All the tokens like words or emojis found in the input string.
// Words: List of words from input string that were found in AFINN list.
// Positive: List of positive words in input string that were found in AFINN list.
// Negative: List of negative words in input string that were found in AFINN list.


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: null,
      generalSentiment: null
    }
    this.findSentiment = this.findSentiment.bind(this)
    
  }

  findSentiment(event) {
    const result = sentiment.analyze(event.target.value)
    this.setState({
      sentimentScore: result.score
    })

    if (result.score < 0) {
      this.setState({
        generalSentiment: "Negative"
      })
    } else if (result.score > 0) {
      this.setState({
        generalSentiment: "Positive"
      })
    } else {
      this.setState({
        generalSentiment: "Nuetral"
      })
    }
    console.log(result)
  }

  findTopics(event) {
    
  }


  render() {
  return (
    <div className='App'>
      <h2>Topic Modeling App</h2>
      <p>Enter text for real time analysis</p>
      <textarea onChange={this.findSentiment}/>
      <p>Sentiment Score: {this.state.sentimentScore}</p>
      <p>General Sentiment: {this.state.generalSentiment}</p>
    </div>
  );
}}

export default App;
