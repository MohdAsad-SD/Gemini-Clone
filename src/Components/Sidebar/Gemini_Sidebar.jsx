import React, { useState } from 'react'
import menu from '../../assets/menu_icon.png'
import newchat from '../../assets/plus_icon.png'
import setting from '../../assets/setting_icon.png'
import plus from '../../assets/plus_icon.png'

const Gemini_Sidebar = ({open,setopen,message,setmessage,history,sethistory,currentindex,setcurrentindex}) => {
  const handledelete=(index)=>{
    const updatedhistory=history.filter(
      (chat,i)=> i!==index
    );
    sethistory(updatedhistory);
  }
  const handlenewchat=()=>{
    if(message.length>0 && currentindex==null){
      const topictitle=message[0].text.slice(0,15) + "...";
      sethistory((prev)=>[
      ...prev,{
        title:topictitle,
        chats:message,
      }
    ]);
    }
    setmessage([]);
    setcurrentindex(null);
  }
   const handleoldchats=(chat,index)=>{
    setmessage(chat.chats);
    setcurrentindex(index);
  }
  return (
    <div  className={` bg-[#2a2a2a] h-full z-50 md:static fixed overflow-hidden top-0 left-0  box-border md:flex md:translate-x-0 ${open ? "translate-x-0":"-translate-x-full"} ${open ? "w-64":"w-20"}  flex flex-col justify-between px-4 py-5 transition-all duration-300 `} >
      <div className='flex-1 flex justify-start items-start flex-col gap-5 w-full cursor-pointer'>
        <img onClick={()=>setopen(!open)} className='w-8 mt-1 brightness-0 invert' src={menu} alt="" />
        <div onClick={handlenewchat}  className={`cursor-pointer font-bold bg-white flex justify-start items-center text-nowrap gap-2 border-2 border-white  rounded-[20px] p-2 transition-all duration-300`}>
          <img className='w-6 brightness-0' src={newchat} alt="" />
          {open && <p>New Chat</p>}
        </div>
        {open ? <div className='w-full'>
          {open ? <p className='text-white font-semi-bold text-xl transition-all duration-300'>Chats</p>:""}
          
          <div className='w-full h-[300px] text-white font-semibold py-4 text-nowrap overflow-y-scroll overflow-x-hidden flex flex-col gap-4'>
            {history.map((chat,index)=>(
              <p className='hover:bg-[#454545] flex justify-between p-1 rounded' onClick={()=>handleoldchats(chat,index)} key={index}>
                {chat.title}
                <img onClick={(e)=> {e.stopPropagation(),handledelete(index)}} className='w-4 brightness-0 invert rotate-45 hover:scale-125' src={plus} alt="" />
              </p>
            ))
            }
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
