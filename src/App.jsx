import { useState } from 'react'
import Sidebar from './Compounents/Sidebar/Sidebar'
import Main from './Compounents/Main/Main'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
    <Main/>
    </>
  )
}

export default App
