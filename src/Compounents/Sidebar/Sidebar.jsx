import React, { useContext, useState } from 'react';
import { assets} from "../../assets/assets"; 
import "./Sidebar.css"
import { Context } from '../../Context/Context';
const Sidebar = () => {

  const [extendes ,setExtended]=useState(false)
  const{onSent, prevPrompt,setResentPrompt  }=useContext(Context);

const loadprompt=async(prompt)=>{
setResentPrompt(prompt)
  await onSent(prompt)
}



  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>{setExtended(prev=>!prev)}} className='menu' src={assets.menu_icon} alt="Menu Icon" />
        <div className="new-chat">
         <img src={assets.plus_icon} alt="" /> 
         {extendes?<p>New Chat</p> :null}
        </div>
{extendes?  <div className="recent">
          <p className='Recent-Tittle'>Recent</p>

          {prevPrompt.map((item ,index)=>{

return(

<div onClick={()=>loadprompt(item)} className="Recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0, 18)}...</p>
          </div>
)
          })}
          
        </div> : null}
       
      </div>
      <div className="bottom">
      <div className="bottom-Item Recent-entry">
        <img src={assets.question_icon} alt="" />
        {extendes ?<p>Help</p> :null }
      </div>
      <div className="bottom-Item Recent-entry">
        <img src={assets.history_icon} alt="" />
         {extendes ? <p>Activity</p> : null}
      </div>
      <div className="bottom-Item Recent-entry">
        <img src={assets.setting_icon} alt="" />
         {extendes?<p>Settings</p> :null}
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
