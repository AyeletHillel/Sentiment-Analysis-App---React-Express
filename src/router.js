import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
import { deleteResult, updateResult } from "./actions"
  import App from "./App"
import { resultLoader, resultsLoader } from "./loaders"
  import Index from "./pages/Index"
  import Show from "./pages/Show"


  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={resultsLoader}/>
        <Route path=":id" element={<Show />} loader={resultLoader}/>
        <Route path="update/:id" action={updateResult}/>
        <Route path="delete/:id" action={deleteResult}/>
      </Route>
    )
  )
  
  export default router