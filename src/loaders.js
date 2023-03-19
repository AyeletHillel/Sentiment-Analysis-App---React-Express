const URL = "https://capstone-backend2-e1zw.onrender.com"

export const resultsLoader = async () => {
    const response = await fetch(URL + "/results")
    const results = await response.json()
    return results
}