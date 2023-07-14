import React from 'react'
import Menu from '../../components/Menu/Menu'
import './ItemHeader.css'
const ItemHeader = () => {
  return (
    <div className="item-header">
      <Menu active={0}></Menu>
    </div>
  )
}
export default ItemHeader
