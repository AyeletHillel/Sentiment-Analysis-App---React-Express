const URL = "https://capstone-backend2-e1zw.onrender.com"

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
}


