import { useState, useEffect } from 'react';
import MobileIcon from './MobileIcon.tsx';
import Contents from './Contents.tsx';

function Container() {
  const [currWidth, setCurrWidth] = useState(window.innerWidth);

  const resized = () => {
    setCurrWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', resized);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-soft-violet-g to-soft-blue-g">
        <div className='h-full w-full flex justify-center items-center lg:grid lg:grid-flow-row lg:grid-cols-7'>
          {currWidth < 1024 ? <MobileIcon /> : ''}
          <div className='w-[90%] h-[75%] flex items-end md:w-[70%] lg:w-full lg:col-start-2 lg:col-span-5 lg:items-center'>
            <Contents />
          </div>
        </div>
      </div>
    </>
  )
}

export default Container;
