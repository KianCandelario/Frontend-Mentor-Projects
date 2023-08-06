import { useState, useEffect } from 'react';

interface apiResponse {
    slip: {
      id: number;
      advice: string;
    };
}

function Contents() {
    const [items, setItems] = useState<apiResponse>({ slip: { id: 0, advice: '' } });;
    const [clicked, setClicked] = useState(false);
    const [currWidth, setCurrWidth] = useState(window.innerWidth);

    const fetchingApi = async () => {
        const apiRequest = await fetch('https://api.adviceslip.com/advice');
        const apiResponse = await apiRequest.json();
        
        setItems(apiResponse);
    }

    useEffect(() => {
        fetchingApi();
    }, [clicked]);

    const adviceNum = items.slip.id;
    const advice = items.slip.advice;

    const setWidth = () => {
        setCurrWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', () => setWidth());

        return window.removeEventListener('resize', () => setWidth());  // Cleanup
    });


    return (
        <>
            <div className="w-full h-full">
                <div className="h-[15%] font-manrope text-neon-green text-xs tracking-[.25rem] flex justify-center items-end xl:h-[17%]">
                    <h4>ADVICE #{adviceNum}</h4>
                </div>
                <div className="h-[55%] text-light-cyan font-manrope text-[23px] text-center px-5 my-3 flex justify-center items-center xl:h-[53%] xl:px-8">
                    <q className='text-mobile-quote'>
                        {advice}
                    </q>
                </div>
                {
                    currWidth < 550 ? 
                    <div className="h-[13%] flex justify-center items-start">
                        <img src="../../src/assets/icons/pattern-divider-mobile.svg" />
                    </div>
                    :
                    <div className="h-[13%] flex justify-center items-start">
                        <img src="../../src/assets/icons/pattern-divider-desktop.svg" />
                    </div>
                }
                <div className='flex justify-center items-center'>
                    <div className="z-10 bg-neon-green p-4 rounded-full shadow-2xl cursor-pointer hover:drop-shadow-green-glow" onClick={() => setClicked(!clicked)}>
                        <img src="../../src/assets/icons/icon-dice.svg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contents;