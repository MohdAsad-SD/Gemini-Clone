import React, { useState } from 'react'
import menu from '../../assets/menu_icon.png'
import newchat from '../../assets/plus_icon.png'
import setting from '../../assets/setting_icon.png'

const Gemini_Sidebar = ({open,setopen}) => {
  return (
    <div  className={` bg-[#2a2a2a] min-h-screen z-50 md:static absolute top-0 left-0  box-border md:flex md:translate-x-0 ${open ? "translate-x-0":"-translate-x-full"} ${open ? "w-64":"w-20"}  flex flex-col justify-between px-4 py-5 transition-all duration-300 `} >
      <div className='flex-1 flex justify-start items-start flex-col gap-5 w-full cursor-pointer'>
        <img onClick={()=>setopen(!open)} className='w-8 mt-1 brightness-0 invert' src={menu} alt="" />
        <div className={`cursor-pointer font-bold bg-white flex justify-start items-center text-nowrap gap-2 border-2 border-white  rounded-[20px] p-2 transition-all duration-300`}>
          <img className='w-6 brightness-0' src={newchat} alt="" />
          {open && <p>New Chat</p>}
        </div>
        {open ? <div className='w-full'>
          {open ? <p className='text-white font-semi-bold text-xl transition-all duration-300'>Chats</p>:""}
          
          <div className='w-full h-[300px] text-white font-semibold py-4 text-nowrap overflow-y-scroll overflow-x-hidden flex flex-col gap-4'>
            <p>hello this is asad nafeesfhsdufhsf</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>
            <p>hello this is asad nafees.......</p>



          </div>
        </div>:""}
      </div>
      <div className=' flex flex-col items-start w-full cursor-pointer '>
        <img className='w-8 brightness-0 invert' src={setting} alt="" />
      </div>
    </div>
  )
}

export default Gemini_Sidebar
