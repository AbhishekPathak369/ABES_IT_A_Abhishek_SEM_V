import React from 'react'

function Count1() {
     const[count,setCount]=React.useState(0);
     const[colorchange,setColorchange]=React.useState(false);
    function changecolor()
    {
        setColorchange(true);
        document.body.style.backgroundColor="green";
    }
    function increment()
    {
        setCount(count+1);
    
    }
    function Decrement()
    {
        setCount(count-1);
    }
  return (
   <div style={{textAlign:'center'}}>
    <button onClick={increment}>Inc</button>
    <span>{count}</span>
    
    <button onClick={Decrement}> Dec</button>


    <br /><br /><br />
    <button onClick={changecolor}>Red</button>

    
   </div>
  )
}

export default Count1