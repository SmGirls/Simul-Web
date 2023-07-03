import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/reset.css'
import ItemHeader from './pages/CsvDetail/ItemHeader'
import Item from './components/Item/Item'
import ItemSelf from './components/ItemSelf/ItemSelf'
import ItemCsvUpload from './components/ItemCsv/ItemCsvUpload'

function App() {
  return (
    <>
      <BrowserRouter>
        <ItemHeader/>
        <Routes>
          <Route path="/" element={<Item />}></Route>
          <Route path="/item-self" element={<ItemSelf />}></Route>
          <Route path="/item-csv-upload" element={<ItemCsvUpload />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
    
  )
}

export default App
