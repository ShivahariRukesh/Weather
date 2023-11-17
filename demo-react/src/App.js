import {  useEffect,Fragment, useState } from "react";
import Weather from './components/Weather'
function App()
{

    const[notification,setNotification]=useState(0)
    useEffect(()=>{
if(notification>0)
        document.title ="React Title Change"

    })
    
    return (
        <>    
           <div className="App">
        <Weather/>
       </div>
       </>

    )
}


export default App;