import React from 'react';
import './ItemSelf.css'

import sonata from '../../photos/sonata.png';
import palisade from '../../photos/palisade.png';
import staria from '../../photos/staria.png';

function ItemSelf() {
    function viewItem(e) {
        e.preventDefault();
        console.log('viewItem');
        window.location.href='/item-table' //ItemTable.js로
    }
    function viewContainer(e) {
        e.preventDefault();
        console.log('viewContainer');
        window.location.href='/' //시각화테이블 보여주는 페이지로
    }

    return (
    <>
        <h1 className="item-header-title">물류 정보 관리</h1>
        <div class='item-method-self'>
            <div class='item-method-self-sonata'>
                <img src={sonata} alt="sonata"/>
                <input />
            </div>
            <div class='item-method-self-palisade'>
                <img src={palisade} alt="palisade"/>
                <input />
            </div>
            <div class='item-method-self-staria'>
                <img src={staria} alt="staria"/>  
                <input />  
            </div>
        </div>
        <button class='btn-view-item-self' onClick={(viewItem)}>물류 정보 보기</button>
        <button class='btn-item-visualize' onClick={(viewContainer)}>시각화하기</button>
    </>
    );
}
export default ItemSelf