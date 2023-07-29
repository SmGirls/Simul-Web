import React from 'react'
import './ItemCsvUpload.css'

function ItemCsvUpload() {
  function uploadCsvFile(e) {
    e.preventDefault()
    console.log('upload csv file')
    window.location.href = '/item-table' //ItemTable.js로
  }

  return (
    <>
      <div className="csv-input-header">
        <h1 className="container item-header-title">물류 입력</h1>
      </div>
      <div class="item-csv-upload">
        <input type="file" id="fileUpload" />
        <button class="btn-item-csv-upload" onClick={uploadCsvFile}>
          import item csv
        </button>
      </div>
    </>
  )
}
export default ItemCsvUpload
