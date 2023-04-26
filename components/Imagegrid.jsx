import React, { useEffect } from 'react'
import style from '../styles/Imagegrid.module.scss'
import Image from 'next/image'
import Imagearr from '.././image.json'



const Imagegrid = () => {
  const [search, setSearch] = React.useState('')
  useEffect(() => {
    if(localStorage.getItem('search')!==undefined){
      setSearch(localStorage.getItem('search'))
    }
  }, [search])
  return (
    <div className={style.block}>
        {search===''?
        Imagearr.filter(item=>item.description.includes(localStorage.getItem(search))).map((item) => {
            return (  
              <div className={style.block__item}>
                <Image src={item.imgurl} alt={'q'} height={200} width={450}/>
            </div>
            )
        })
        :
        Imagearr.map((item) => {
            return (
                <div className={style.block__item}>
                    <Image src={item.imgurl} alt={'q'} height={200} width={450}/>
                </div>
            )
        })
        }
    </div>
  )
}

export default Imagegrid