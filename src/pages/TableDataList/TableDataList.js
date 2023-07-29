import React, { useEffect, useMemo, useState } from 'react'
import apiClient from '../../apis/client'
import './TableDataList.css'
import EnhancedTable from '../../components/Table/ItemTable'

const TableDataList = () => {
  const tableData = []

  const columns = useMemo(
    () => [
      {
        accessor: 'Product Name',
        Header: 'namefke',
      },
      {
        accessor: '가로',
        Header: 'rows',
      },
      {
        accessor: '세로',
        Header: 'columns',
      },
      {
        accessor: '높이',
        Header: 'height',
      },
      {
        accessor: '무게',
        Header: 'weight',
      },
      {
        accessor: '갯수',
        Header: 'count',
      },
    ],
    []
  )
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:7000/struck_manage')
      const data = await response.json()
      setBoxes(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return (
    <div className="td-list">
      <h3 className="td-list-title">물류 정보 관리</h3>
      {boxes.length != 0 ? (
        <EnhancedTable rows={boxes} columns={columns} tableData={boxes} />
      ) : (
        <></>
      )}
    </div>
  )
}
export default TableDataList
