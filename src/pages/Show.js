import { useLoaderData , Form} from "react-router-dom"


function Show(props) {
    const result = useLoaderData()
    console.log(result)
    return (
<div className="bg-gray-900 text-gray-50 min-h-screen">
  <div className="mx-auto p-10 max-w-3xl">
    <h2 className="text-3xl font-bold text-blue-500 mb-5">Analysis Result</h2>
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-10">
  <p className="text-3xl font-bold text-center mb-8">"{result.input}"</p>
  <p className="text-lg mb-2">Sentiment Score: {result.score}</p>
  <p className="text-lg mb-4">General Sentiment: {result.sentiment}</p>
  <div className="flex justify-between flex-col lg:flex-row">
    <div className="mb-4 lg:mb-0">
      <h2 className="text-lg font-bold mb-2">Update Input</h2>
      <Form action={`/update/${result._id}`} method="post">
        <input type="text" name="input" defaultValue={result.input} className="w-full p-2 rounded-lg mb-2 bg-gray-900 text-gray-50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        <button type="submit" className="inline-block py-2 px-4 bg-blue-500 text-gray-50 font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Update</button>
      </Form>
    </div>
    <div>
      <h2 className="text-lg font-bold mb-2">Delete Analysis</h2>
      <Form action={`/delete/${result._id}`} method="post">
        <button type="submit" className="inline-block py-2 px-4 bg-red-500 text-gray-50 font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Delete</button>
      </Form>
    </div>
  </div>
</div>

    <a href="/" className="block text-lg text-blue-500 underline hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">&larr; Back to Home</a>
  </div>
</div>

    )
}

export default Show
