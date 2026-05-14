import React, { useState } from 'react'
import menu from '../../assets/menu_icon.png'
import user from '../../assets/user_icon.png'
import plus from '../../assets/plus_icon.png'
import mic from '../../assets/mic_icon.png'
import send from '../../assets/send_icon.png'

const Gemini_Main = ({open,setopen}) => {
  const [input,setinput]=useState("");
  return (
    <div onClick={()=>setopen(false)} className='bg-[#0e0e0f] flex h-full flex-1 p-6 overflow-hidden flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center gap-5'>
          <img onClick={(e)=>{e.stopPropagation(),setopen(!open);}}  className='w-8 md:hidden brightness-0 invert' src={menu} alt="" />
          <h1 className='text-white font-bold text-2xl'>Gemini</h1>
        </div>
        <div>
          <img className='rounded-full w-12' src={user} alt="" />
        </div>
      </div>
      <div className='flex-1 flex flex-col w-full flex flex-col justify-center items-center bg-red-500'>
        ghello

      </div>
      <div className='w-full flex justify-center relative '>
        <textarea onChange={(e)=>setinput(e.target.value)} className='w-2xl resize-none bg-[#2a2a2a] outline-none rounded-2xl  text-white h-[100px] p-5' type="text" placeholder='Ask Gemini'></textarea>
        <div className='flex justify-between items-center absolute w-[90%] p-3 md:w-2xl md:p-4 bottom-0'>
          <div className=' rounded-[50%] p-1 hover:bg-[#454545] cursor-pointer '>
            <img className='w-4 brightness-0 invert' src={plus} alt="" />
          </div>
          <div className='rounded-[50%] p-1 hover:bg-[#454545]  cursor-pointer'>
            {input.trim() ? <img className='w-5 brightness-0 invert' src={send} alt="" />:<img className='w-5 brightness-0 invert ' src={mic} alt="" />}
            
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Gemini_Main
