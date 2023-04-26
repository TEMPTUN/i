import React from 'react'
import style from '../styles/Searchbar.module.scss'

const Searchbar = () => {
  const [search, setSearch] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const get=()=>{
    localStorage.setItem('search', search)
    setSearch('')
  }
  return (
    <div className={style.searchbar}>
        <input className={style.searchbar__input} placeholder='Make your search' onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
        <button className={style.searchbar__button} onClick={()=>get()}>Search</button>
    </div>
  )
}

export default Searchbar