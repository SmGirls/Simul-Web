import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Menu.css'
const Menu = props => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header__logo">
          <Link to="/">
            <span className="none">SMgirls</span>
          </Link>
        </div>
        <ul className="header__menu">
          <li>
            <Link className={props.active === '0' ? 'active' : ''} to="/">
              물류 정보
            </Link>
          </li>
          <li>
            <Link className={props.active === '1' ? 'active' : ''} to="/qcoa/">
              컨테이너 관리
            </Link>
          </li>
          <li>
            <Link className={props.active === '2' ? 'active' : ''} to="/market">
              내 정보
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Menu
