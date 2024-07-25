import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {

    const{onSent, resentPrompt, showResult, loading, resultData,input,  setInput   }=useContext(Context)
  return (
    <div className='main'>
      
<div className="nav">
    <p>Gemni</p>
    <img src={assets.user_icon} alt="" />
</div>

<div className="main-container">

{!showResult ? <>
    <div className="greet">
    <p><span>Hello, Sheryar Amr</span></p>
    <p>How can I help you today ?</p>
</div>

<div className="cards">
    <div className="card">

        <p>Suggest beatuiful places to see on an upcoming road trip</p>
        <img src={assets.compass_icon} alt="" />
    </div>
    <div className="card">

        <p>Brifly summarize this concept : urban planning</p>
        <img src={assets.bulb_icon} alt="" />
    </div>
    <div className="card">

        <p>BrainStorm team bonding activities for our work retreat</p>
        <img src={assets.message_icon} alt="" />
    </div>
    <div className="card">

        <p>Improve the readability of the following code </p>
        <img src={assets.code_icon} alt="" />
    </div>
</div>
</>
: <div className='result'>
 
    <div className="result-tittle">
        <img src={assets.user_icon} alt="" />
        <p>{resentPrompt}</p>
    </div>
    <div className="result-Data">
        <img src={assets.gemini_icon} alt="" />
        {loading ? <div className='loader'>
<hr />
<hr />
<hr />

        </div> :
        
        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
    }
        
    </div>
</div> }



<div className="main-bottom">



    <div className="seaarch-box">
        <input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder='Enter A prompt Here' />
        <div className="three-div">
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img  onClick={()=>onSent()} src={assets.send_icon} alt="" />
        </div>
    </div>
    <p className='bottom-info'>Gemini may Display inaccurate info, including about people, so doble-check its responses. you privacy and Gemini Apps </p>
</div>

</div>
    </div>
  )
}

export default Main
