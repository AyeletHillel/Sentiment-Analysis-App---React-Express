import { useLoaderData , Form} from "react-router-dom"


function Show(props) {
    const result = useLoaderData()
    console.log(result)
    return (
        <div>
            <p>{result.input}</p>
            <p>Sentiment Score: {result.score}</p>
            <p>General Sentiment: {result.sentiment}</p>

            <h2>Update input</h2>
            <Form action={`/update/${result._id}`} method="post">
                <input type="text" name="input" defaultValue={result.input} />
                <input type="submit" value="Update" />
            </Form>
            
            <h2>Delete Analysis</h2>
            <Form action={`/delete/${result._id}`} method="post">
                <input type="submit" value="Delete" />
            </Form>
        </div>
    )
}

export default Show
