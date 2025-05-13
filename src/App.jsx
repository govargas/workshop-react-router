// TODO: Import necessary modules and data
import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/Home'
import SongInfo from './pages/SongInfo'

export const App = () => {
  return (
    <>
      <h1>Start here in app.jsx</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/songinfo" element={<SongInfo />} />
    </Routes>


      {/* TODO: Set up the two routes. One for the list of songs, one for the song details */}

    </BrowserRouter>
    </>
  )
}
