import React from "react"
import { Match } from '@reach/router'



export default function Home() {
  
  <>
    <Match path="/">
      {
        window.location.href="/Admin/Component/Appbar"
      }
    </Match>

  
   
    
  </>

}
