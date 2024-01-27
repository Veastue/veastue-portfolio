import React, {useEffect}from 'react';

function RotateComp() {
    useEffect(() => {
        const text = document.querySelector('.text p');
        if (text) {
          text.innerHTML = text.innerText
            .split('')
            .map((char, i) => `<span style="transform: rotate(${i * 7.3}deg)">${char}</span>`)
            .join('');
        }
      }, []);


    return (
        
        <div>
          <div className='circle bg-white'>
            <div className='text '>
                <p>Veastue.Dev - Web Developer</p>
            </div>
            <div className='text-7xl'>👨🏾‍💻</div>
          </div>
        </div>
    );
}

export default RotateComp;
