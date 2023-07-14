import React from 'react';

import './Item.css'
// import ItemMethodSelf from '../ItemSelf/ItemSelf';

function Item() {

    function importItemCsv(e) {
        // importcsv 클릭하면 파일을 올릴 수 있는 업로드 페이지(ItemCsvUpload.js)로 이동
        e.preventDefault();
        console.log('import item csv');
        window.location.href='/item-csv-upload';
    }
    function importItemSelf(e) {
        // importItemSelf 클릭하면 수량 입력할 수 있는 페이지(ItemSelf.js)로 가기
        e.preventDefault();
        console.log('import item self');
        window.location.href='/item-self'
    }

    return (
    <>
        <div class='item-method'>
            <h3 class='item-method-title'>방법</h3>
            <button class='btn-import-item-csv' onClick={(importItemCsv)}>import item csv</button>
            <button class='btn-import-item-self' onClick={(importItemSelf)}>import item self</button>
        </div>
        
    </>
    );
}
export default Item
