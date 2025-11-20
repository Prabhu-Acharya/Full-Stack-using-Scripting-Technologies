import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './hello.jsx'
//import MyComp from './MyComp.jsx'
import MyComp2 from './MyComp2.jsx'
import SecondPage from './SecondPage.jsx'
import MyComp3 from './MyComp3.jsx'
import Propcomp from './Propcomp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    
    <Hello />
    {/* <MyComp /> */}
    {/* <MyComp2 /> 
    <SecondPage />
    <MyComp3 /> */} 


    <Propcomp name={"Prabhu"} age={21} marks={[23, 45,56,67]} />
    <Propcomp name={"yash"} age={21} isPass={}/>
  </StrictMode>,
)
