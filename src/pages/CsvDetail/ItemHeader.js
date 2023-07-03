import React from 'react'
import Menu from '../../components/Menu/Menu'
import './ItemHeader.css'
const ItemHeader = () => {
  return (
    <div className="item-header">
      <Menu active={0}></Menu>
      <h1 className="item-header-title">물류 정보 관리</h1>
    </div>
  )
}
export default ItemHeader
