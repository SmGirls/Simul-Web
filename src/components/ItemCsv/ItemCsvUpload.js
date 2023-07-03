import React from 'react';

function ItemCsvUpload() {
    function uploadCsvFile(e) {
        e.preventDefault();
        console.log('upload csv file');
        window.location.href='/' //ItemTable.js로
    }

    return (
    <>
        <div class='item-csv-upload'>
            <input type="file" id="fileUpload" />
            <button class='btn-item-csv-upload' onClick={(uploadCsvFile)}>import item csv</button>
        </div>
        
    </>
    );
}
export default ItemCsvUpload