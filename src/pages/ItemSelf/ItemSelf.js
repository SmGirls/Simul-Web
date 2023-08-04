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
      <h3 className="item-self-title">물류 정보 입력</h3>
      <span className="item-self-title-info">
        각 물류의 수를 직접 입력하세요.
      </span>
      <div class="item-method-self">
        <div class="item-method-self-item">
          <img src={sonata} alt="sonata" />
          <input type="number" name="number" placeholder="Input number" />
          <input type="submit" value="Submit" />
        </div>
        <div class="item-method-self-item">
          <img src={palisade} alt="palisade" />
          <input type="number" name="number" placeholder="Input number" />
          <input type="submit" value="Submit" />
        </div>
        <div class="item-method-self-item">
          <img src={staria} alt="staria" />
          <input type="number" name="number" placeholder="Input number" />
          <input type="submit" value="Submit" />
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
