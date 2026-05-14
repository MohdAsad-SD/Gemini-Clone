import { useEffect, useState } from 'react'
import Gemini_Main from './Components/Main/Gemini_Main'
import Gemini_Sidebar from './Components/Sidebar/Gemini_Sidebar'
function App() {
  const [open,setopen]=useState(false);
  

  return (
    <>
    <div className='flex h-dvh overflow-hidden w-full' >
      <Gemini_Sidebar open={open} setopen={setopen}/>
      <Gemini_Main open={open} setopen={setopen}/>
    </div>
    
      
    </>
  )
}

export default App
