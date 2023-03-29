const Sentiment =require('sentiment') 
const sentiment = new Sentiment()

// Returned Objects
// Score: Score calculated by adding the sentiment values of recognized words.
// Comparative: Comparative score of the input string.
// Calculation: An array of words that have a negative or positive valence with their respective AFINN score.
// Token: All the tokens like words or emojis found in the input string.
// Words: List of words from input string that were found in AFINN list.
// Positive: List of positive words in input string that were found in AFINN list.
// Negative: List of negative words in input string that were found in AFINN list.

const getSentiment = (input) => {
    const result = sentiment.analyze(input)
    const score = result.score
    const generalSentiment = score > 0 ? "positive" : score < 0 ? "negative" : "neutral"
    return [score, generalSentiment]
}


module.exports = getSentiment;