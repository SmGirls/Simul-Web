import React from 'react'
import './ItemSelf.css'

import sonata from '../../photos/sonata.png'
import palisade from '../../photos/palisade.png'
import staria from '../../photos/staria.png'

function ItemSelf() {
  function viewItem(e) {
    e.preventDefault()
    console.log('viewItem')
    window.location.href = '/item-table' //ItemTable.js로
  }
  function viewContainer(e) {
    e.preventDefault()
    console.log('viewContainer')
    window.location.href = '/' //시각화테이블 보여주는 페이지로
  }

  return (
    <>
      <h1 className="item-self-title">물류 정보 입력</h1>
      <h4 className="item-self-title-info">
        컨테이너에 적재할 물류를 입력하세요
      </h4>
      <div class="item-method-self">
        <div class="item-method-self-item">
          <img src={sonata} alt="sonata" />
          <p>SONATA</p>
          <input type="number" name="number" placeholder="Input number" />
        </div>
        <div class="item-method-self-item">
          <img src={palisade} alt="palisade" />
          <p>PALISADE</p>
          <input type="number" name="number" placeholder="Input number" />
        </div>
        <div class="item-method-self-item">
          <img src={staria} alt="staria" />
          <p>STARIA</p>
          <input type="number" name="number" placeholder="Input number" />
        </div>
      </div>
      <div className="item-method-btn">
        <button class="btn-view-item-self" onClick={viewItem}>
          물류 정보 보기
        </button>
        <button class="btn-item-visualize" onClick={viewContainer}>
          시각화하기
        </button>
      </div>
    </>
  )
}
export default ItemSelf
