import React from 'react'
import menu from '../../assets/menu_icon.png'
import user from '../../assets/user_icon.png'

const Gemini_Main = ({open,setopen}) => {
  return (
    <div onClick={()=>setopen(false)} className='bg-[#0e0e0f] h-screen flex-1 p-6'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center gap-5'>
          <img onClick={(e)=>{e.stopPropagation(),setopen(!open);}}  className='w-8 md:hidden brightness-0 invert' src={menu} alt="" />
          <h1 className='text-white font-bold text-2xl'>Gemini</h1>
        </div>
        <div>
          <img className='rounded-full w-12' src={user} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gemini_Main
