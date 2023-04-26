import React from 'react'
import style from '../styles/Imagegrid.module.scss'
import Image from 'next/image'
import Imagearr from '.././image.json'



const Imagegrid = () => {
  return (
    <div className={style.block}>
{
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