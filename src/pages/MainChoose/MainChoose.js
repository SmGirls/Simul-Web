import React from 'react'

import './MainChoose.css'

function MainChoose() {
  function importItemCsv(e) {
    // importcsv 클릭하면 파일을 올릴 수 있는 업로드 페이지(ItemCsvUpload.js)로 이동
    e.preventDefault()
    console.log('import item csv')
    window.location.href = '/item-csv-upload'
  }
  function importItemSelf(e) {
    // importItemSelf 클릭하면 수량 입력할 수 있는 페이지(ItemSelf.js)로 가기
    e.preventDefault()
    console.log('import item self')
    window.location.href = '/item-self'
  }

  return (
    <>
      <h1 className="item-header-title">물류 입력</h1>
      <div class="item-method">
        <ul>
          <li>
            <h3 class="item-method-title">방법</h3>
            <div className="item-choose-method">
              <button class="btn-import-item-csv" onClick={importItemCsv}>
                csv 파일 import
              </button>
              <button class="btn-import-item-self" onClick={importItemSelf}>
                수량 직접 입력
              </button>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </>
  )
}
export default MainChoose
