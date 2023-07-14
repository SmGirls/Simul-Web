import React from 'react';

function ItemCsvUpload() {
    function uploadCsvFile(e) {
        e.preventDefault();
        console.log('upload csv file');
        window.location.href='/item-table' //ItemTable.js로
    }

    return (
    <>
        <h1 className="item-header-title">물류 정보 관리</h1>
        <div class='item-csv-upload'>
            <input type="file" id="fileUpload" />
            <button class='btn-item-csv-upload' onClick={(uploadCsvFile)}>import item csv</button>
        </div>
        
    </>
    );
}
export default ItemCsvUpload