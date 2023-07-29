import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/reset.css'
import Table from './components/Table/ItemTable'
import { useMemo } from 'react'
import ItemHeader from './pages/CsvDetail/ItemHeader'
import ItemCsvUpload from './components/ItemCsv/ItemCsvUpload'
import ManageConatainer from './components/ManageContainer/ManageContainer'
import MainChoose from './pages/MainChoose/MainChoose'
import TableDataList from './pages/TableDataList/TableDataList'
import ItemSelf from './pages/ItemSelf/ItemSelf'

function App() {
  return (
    <>
      <BrowserRouter>
        <ItemHeader />
        <Routes>
          <Route path="/" element={<MainChoose />}></Route>
          <Route path="/item-table" element={<TableDataList />}></Route>
          <Route path="/item-self" element={<ItemSelf />}></Route>
          <Route path="/item-csv-upload" element={<ItemCsvUpload />}></Route>
          <Route path="/container" element={<ManageConatainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
