import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/reset.css'
import './App.css'
import Main from './pages/CsvDetail/CsvDetail'
import CsvDetail from './pages/CsvDetail/CsvDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/csv" element={<CsvDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
