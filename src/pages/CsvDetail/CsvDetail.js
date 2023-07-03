import React from 'react'
import Menu from '../../components/Menu/Menu'
import './CsvDetail.css'
const CsvDetail = () => {
  return (
    <div className="csv-detail">
      <Menu active={0}></Menu>
      <h1 className="csv-detail-title">물류 정보 관리</h1>
    </div>
  )
}
export default CsvDetail
