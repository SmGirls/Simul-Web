import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/reset.css'
import Table from './components/Table/ItemTable'
import { useMemo } from 'react';
import Item from './components/Item/Item'
import ItemHeader from './pages/CsvDetail/ItemHeader'
import ItemSelf from './components/ItemSelf/ItemSelf'
import ItemCsvUpload from './components/ItemCsv/ItemCsvUpload'
import ManageConatainer from './components/ManageContainer/ManageContainer';

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
    <>
      <BrowserRouter>
        <ItemHeader />
        <Routes>
          <Route path="/" element={<Item />}></Route>
          <Route path="/item-table" element={<Table columns={columns} data={tableData} />}></Route>
          <Route path="/item-self" element={<ItemSelf />}></Route>
          <Route path="/item-csv-upload" element={<ItemCsvUpload />}></Route>
          <Route path="/container" element={<ManageConatainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
