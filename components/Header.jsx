import React from 'react'
import style from '../styles/Header.module.scss'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <>
        <div className={style.head}>
            <div className={style.content}>
                <h1>Image Gallery</h1>
                <p>perfect fit!!!</p>
            </div>
            <Searchbar/>
        </div>
    </>
  )
}

export default Header