import './App.css';

import React, { useState } from 'react';
import QrCode from "react-qr-code"
import './App.css';

const App = () => {

  const [value, setValue] = useState();
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('000000');
  const [size, setSize] = useState(256);

  return(

    <div className='App'>

    <center className='container'>


    <input className='input' type='text'
    onChange={(e) => setValue(e.target.value)}
    placeholder='Qr-code value'
    />


    <input className='input' type='text'
    onChange={(e) => setBack(e.target.value)}
    placeholder='Background color'
    />

    <input className='input' type='text'
    onChange={(e) => setFore(e.target.value)}
    placeholder='Foreground color'
    />


    <input className='input' type='number'
    onChange={(e) => setSize(parseInt(e.target.event ===
      '' ? 0 : e.target.value, 10))}
    placeholder='Qr-Code size'
    />

      <div className='Qr-code'>

      {value && (
        <QrCode
        title="Qr-code projects"
        value={value}
        bgColor={back}
        fgColor={fore}
        size={size === '' ? 0 : size}
        />
      )}

    </div>

    </center>  

    </div>

  )
}

export default App;