import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const Context= createContext();

const ContextProvider=(props)=>{

    const [input ,setInput]=useState("")
const [resentPrompt ,setResentPrompt]=useState("")
const [prevPrompt ,setPrevPrompt]=useState([])
const [showResult ,setShowResult ]=useState(false)
const [loading ,setLoding]=useState(false)
const [resultData , setResultData]=useState("")


const delayPara=(index, nextWord )=>{

    setTimeout(function(){
        
        setResultData(prev=>prev+nextWord)
    },75*index );

}

const newChart=()=>{
    setLoding(false)
    setShowResult(false )
}

    const onSent = async (prompt)=>{

        setResultData("")
        setLoding(true)
        setShowResult(true)

        let response;
        if(prompt!==undefined){

            response=await run(prompt)
            setResentPrompt(prompt)

        }
        else{
            setPrevPrompt(prev=>[...prev,input])
            setResentPrompt(input)
             response=await run(input)
        }
        
       
        let responseArray=response.split("**")
        let newResponse="";
        for (let i=0; i<responseArray.length; i++){

            if(i=== 0 || i%2 !==1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2=newResponse.split("*").join("</br>")

        let newResponseArray=newResponse2.split(" ");

        for(let i=0; i<newResponseArray.length; i++){

            const nextWord =newResponseArray[i]
            delayPara(i,nextWord + " ")
        }
        setLoding(false)
        setInput("")

    }


    

const contextValue={
prevPrompt,
setPrevPrompt,
onSent,
setResentPrompt,
resentPrompt,
showResult,
loading,
resultData,
input,
setInput,
newChart,




    }

    return(
        <Context.Provider value={contextValue}>
           {props.children} 
        </Context.Provider>
    )
}

export default ContextProvider;