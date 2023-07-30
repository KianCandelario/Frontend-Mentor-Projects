import { useState } from 'react';
import Submitted from './Submitted.tsx';

function Contents() {
    const [submitted, setSubmitted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <>
            { submitted === false ? 
                <div className='px-5 font-overpass flex flex-col gap-4'>
                    <div>
                        <div className="bg-medium-grey/10 p-2 w-11 h-11 rounded-full flex justify-center items-center mb-2">
                            <img src="../../src/assets/icons/icon-star.svg" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-2xl text-white mb-2">
                            <h1>How did we do?</h1>
                        </div>
                        <div className="text-medium-grey text-sm">
                            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                        </div>
                    </div>
                    <div className="text-medium-grey text-sm flex justify-between items-center my-2 font-bold">
                        <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 1 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(1)}>1</button>
                        <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 2 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(2)}>2</button>
                        <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 3 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(3)}>3</button>
                        <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 4 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(4)}>4</button>
                        <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 5 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(5)}>5</button>
                    </div>
                    <button className='w-full py-3 bg-orange text-white text-sm rounded-full tracking-widest font-bold active:bg-white active:text-orange ease-in-out duration-300' onClick={activeIndex > 0 ? () => setSubmitted(true) : () => alert('Please select a number for rating')}>SUBMIT</button>
                </div>
                : <Submitted rating={activeIndex} />
            }
        </>
    );
}

export default Contents;