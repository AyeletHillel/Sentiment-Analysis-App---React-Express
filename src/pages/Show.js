import { useLoaderData } from "react-router-dom"

function Show(props) {
    const result = useLoaderData()
    console.log(result)
    return (
        <div>
            <p>{result.input}</p>
            <p>Sentiment Score: {result.score}</p>
            <p>General Sentiment: {result.sentiment}</p>
        </div>
    )
}

export default Show
