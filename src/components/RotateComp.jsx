import React, { useEffect, useState } from 'react';

function RotateComp() {
  const [rotatedText, setRotatedText] = useState('');

  useEffect(() => {
    const newText = 'VeastueDev - Front-End Developer'
      .split('')
      .map((char, i) => `<span  style="transform: rotate(${i * 9.5}deg); text-transform: uppercase; font-family: 'Consolas', sans-serif; word-spacing: 3px">${char} </span>`)
      .join('');
    setRotatedText(newText);
  }, []);

  return (
    <div>
      <div className='circle bg-white'>
        <div className='text' dangerouslySetInnerHTML={{ __html: rotatedText }}>
        </div>
        <div className='text-6xl'>👨🏾‍💻</div>
      </div>
    </div>
  );
}

export default RotateComp;
