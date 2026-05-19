import { useEffect, useState } from 'react'
import Gemini_Main from './Components/Main/Gemini_Main'
import Gemini_Sidebar from './Components/Sidebar/Gemini_Sidebar'
function App() {
  const [open,setopen]=useState(false);
  const [message,setmessage]=useState([]);
  const [history, sethistory] = useState(() => {
    try{
      const savehistory=localStorage.getItem("history");
      if(savehistory){
        const parse=JSON.parse(savehistory);
        return Array.isArray(parse) ? parse:[];
        
      }
      return [];
    }
    catch(error){
      console.error("Failed To Parse History"+error);
      return [];
    }
  });
  const [currentindex,setcurrentindex]=useState(null);
  useEffect(()=>{
    localStorage.setItem("history",JSON.stringify(history));
  },[history]);
  return (
    <>
    <div className='flex h-dvh overflow-hidden w-full' >
      <Gemini_Sidebar currentindex={currentindex} setcurrentindex={setcurrentindex} history={history} sethistory={sethistory} message={message} setmessage={setmessage} open={open} setopen={setopen}/>
      <Gemini_Main currentindex={currentindex} setcurrentindex={setcurrentindex} history={history} sethistory={sethistory} message={message} setmessage={setmessage} open={open} setopen={setopen}/>
    </div>
    
      
    </>
  )
}

export default App
