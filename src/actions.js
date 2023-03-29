import { redirect } from "react-router-dom"

const URL = "https://capstone-backend2-e1zw.onrender.com"
const getSentiment = require("./getSentiment.js")

export const createResult = async ({ input, score, sentiment }) => {
    const newResult = {
        "input": input,
        "score": score,
        "sentiment": sentiment
    }

    await fetch(URL + "/results", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResult),
      })
      return redirect("/")
}

export const updateResult = async ({request, params}) => {

  const formData = await request.formData()
  const input = formData.get("input")
  const [score, sentiment] = getSentiment(input)

  const updatedResult = {
    "input": input,
    "score": score,
    "sentiment": sentiment
}
await fetch(URL + "/results/" + params.id, {
  method: "put",
  headers: {
      "Content-Type":"application/json"
  },
  body: JSON.stringify(updatedResult)
})
    return redirect("/")
}

export const deleteResult = async ({params}) => {
  await fetch(URL + "/results/" + params.id, {
    method: "delete",
    headers: {
        "Content-Type":"application/json"
    },
  })
  return redirect("/")
}