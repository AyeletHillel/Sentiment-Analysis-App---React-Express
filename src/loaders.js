const URL = "https://capstone-backend2-e1zw.onrender.com"

export const resultsLoader = async () => {
    const response = await fetch(URL + "/results")
    const results = await response.json()
    return results
}

export const resultLoader = async (id) => {
    const response = await fetch(URL + "/results/" + id)
    const result = await response.json()
    return result
}