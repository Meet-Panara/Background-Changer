import React, { useContext, useEffect, useState } from 'react';

function ColorBar(props) {
  const btnStyle = `px-3 py-1 rounded-lg`;

  console.log('rendered');
  const [color, setColor] = useState('white');
  useEffect(() => {
    console.log(props.screen(color));
  }, [color])
  
  return(
    <div className='flex flex-wrap shadow-lg bg-slate-200 rounded-lg px-3 py-2 gap-3'>
      {(props.btnArr).map((item, index) => (
        <button key={index} className={btnStyle} onClick={() => { setColor(item[0]);}} style={{ color: item[1], backgroundColor: item[0] }}>
          {item[0]}
        </button>
      ))}
    </div>
  );
}

export default ColorBar;