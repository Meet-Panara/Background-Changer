import { createContext, useRef, useState } from 'react'
import ColorBar from './Components/ColorBar'


function App() {

  const btnArr = [['Black', 'white'], ['White', 'black'], ['LightGreen', 'black'], ['Teal', 'white'], ['Pink', 'black'] ];
  const screenRef = useRef(null);

  function screen(color){
    return(screenRef.current.style.backgroundColor = color);
  }

  return (
    <div className=' min-h-screen min-w-full' id='screen'  ref={screenRef}>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 '>
          <ColorBar btnArr = {btnArr} screen={screen} ></ColorBar>
      </div>
    </div>
  )
}

export default App;
