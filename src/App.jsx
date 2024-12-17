import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element>

            <Route index element />
            <Route path="trip/:id" element />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
