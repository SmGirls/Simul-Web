import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/reset.css'
import Main from './pages/CsvDetail/CsvDetail'
import CsvDetail from './pages/CsvDetail/CsvDetail'
import Table from './components/Table/ItemTable'
import { useMemo } from 'react';

function App() {
  const tableData = [];

  const columns = useMemo(
    () => [
      {
        accessor: "Product ID",
        Header: "id",
      },
      {
        accessor: "Product Name",
        Header: "namefke",
      },
      {
        accessor: "가로",
        Header: "rows",
      },
      {
        accessor: "세로",
        Header: "columns",
      },
      {
        accessor: "높이",
        Header: "height",
      },
      {
        accessor: "무게",
        Header: "weight",
      },
    ],
    []
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/csv" element={<CsvDetail />}></Route>
        <Route path="/table" element={<Table columns={columns} data={tableData} />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
