import React from 'react'

export default function UseState() {
   

    const counter=()=>{
        let count=0;
        count++;
        document.write(count);
    }

    return (
   <div>
    <button onClick={counter}>count</button>
   </div>
  )
}
