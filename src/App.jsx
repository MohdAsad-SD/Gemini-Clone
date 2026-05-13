import { useState } from 'react'
import Gemini_Main from './Components/Main/Gemini_Main'
import Gemini_Sidebar from './Components/Sidebar/Gemini_Sidebar'
function App() {
  

  return (
    <>
    <div className='flex h-screen w-full' >
      <Gemini_Sidebar/>
      <Gemini_Main/>
    </div>
    
      
    </>
  )
}

export default App
