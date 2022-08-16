// import React from "react"
// import { Match } from '@reach/router'



// export default function Home() {
  
//   <>
//     <Match path="/">
//       {
//         window.location.href="/Admin/Component/Appbar"
//       }
//     </Match>

  
   
    
//   </>

// }
import React from 'react'
import Appbar from "./Admin/Component/Appbar"
import Footer from "./Admin/Component/Footer"
import Home from "./Admin/Component/Home"

export default function index() {
  return (
    <>
    <Appbar/>
   <Home/>
    <Footer/>
   
    </>
  )
}
