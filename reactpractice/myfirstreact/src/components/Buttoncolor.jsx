import React from 'react'

function Buttoncolor() {
    const[colorchange,setColorchange]=React.useState(false);
    function changecolor()
    {
        setColorchange(true);
        document.button.style.backgroundColor="green";
    }
  return (
    <div>

        <button onClick={changecolor}>{colorchange}</button>
    </div>
  )
}

export default Buttoncolor