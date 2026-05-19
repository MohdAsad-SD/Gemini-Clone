import React, { useState } from 'react'
import menu from '../../assets/menu_icon.png'
import user from '../../assets/user_icon.png'
import plus from '../../assets/plus_icon.png'
import mic from '../../assets/mic_icon.png'
import send from '../../assets/send_icon.png'
import {main} from '../../../Gemini_Response'
import gemini_icon from '../../assets/gemini_icon.png'

const Gemini_Main = ({open,setopen,message,setmessage,history,sethistory}) => {
  const [input,setinput]=useState("");
  const [loading,setloading]=useState(false);
  
  const handlekey=(e)=>{
    if(e.key==="Enter"&&input.trim()){
      e.preventDefault();
      handlesend();
    }
  };
  
  const handlesend=async ()=>{
    if(!input.trim())return;
    const usermsg={
      type:"user",
      text:input,
    };
    setmessage((prev)=>[
      ...prev,usermsg
    ]);
    const userprompt=input;
    setinput("")
    try{
      setloading(true);
      const resultresponse=await main(userprompt);
      const aimessage={
        type:"ai",
        text:resultresponse
      };
      setmessage((prev)=>[
        ...prev,aimessage
      ]);
      setloading(false);
    }
    catch(error){
      console.log("Error!",error);
      setloading(false);
    }
  }
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
      <div className='flex-1 flex flex-col mt-8  flex gap-6 flex-col  self-center items-center overflow-y-auto px-5 py-1 w-[100%]  md:w-[50%] overflow-x-hidden'>
        {message.map((msg,index)=>(
          <div key={index} className={` break-words whitespace-pre-wrap leading-6 md:leading-8 flex rounded-2xl p-5 gap-2  ${msg.type==="user" ? "":"text-start"} ${msg.type==="user" ? "bg-blue-500 self-end":"bg-[#2a2a2a] self-start"} ${msg.type==="user" ? "w-[50%]":"w[100%]"} ${msg.type==="ai" ? "text-white":"text-black"}`}>
            {msg.type==="user" ? <img className=' rounded-full w-8 shrink-0 h-8' src={user}/>:<img className='rounded-full w-8 shrink-0 h-8' src={gemini_icon}/>}
            {msg.text}
          </div>
          
        ))}
        {loading &&(
              <div className='self-start'>
                <img className='w-8 animate-ping' src={gemini_icon} alt="" />
              </div>
        )}

      </div>
      <div className='w-full flex justify-center relative '>
        <textarea value={input} onKeyDown={handlekey} onChange={(e)=>setinput(e.target.value)} className='w-2xl resize-none bg-[#2a2a2a] outline-none rounded-2xl  text-white h-[100px] p-5' type="text" placeholder='Ask Gemini'></textarea>
        <div className='flex justify-between items-center absolute w-[90%] p-3 md:w-2xl md:p-4 bottom-0'>
          <div className=' rounded-[50%] p-1 hover:bg-[#454545] cursor-pointer '>
            <img className='w-4 brightness-0 invert' src={plus} alt="" />
          </div>
          <div onClick={handlesend} className='rounded-[50%] p-1 hover:bg-[#454545]  cursor-pointer'>
            {input.trim() ? <img className='w-5 brightness-0 invert' src={send} alt="" />:<img className='w-5 brightness-0 invert ' src={mic} alt="" />}
            
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Gemini_Main
