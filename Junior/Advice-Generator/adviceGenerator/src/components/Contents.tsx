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


    return (
        <>
            <div className="w-full h-full flex flex-col items-center">
                <div className="font-manrope text-neon-green text-xs tracking-[.25rem] mt-10 mb-5">
                    <h4>Advice #{adviceNum}</h4>
                </div>
                <div className="text-light-cyan font-manrope text-[23px] text-center px-5">
                    <q>
                        {advice}
                    </q>
                </div>
                <div className="my-5">
                    <img src="../../src/assets/icons/pattern-divider-mobile.svg" />
                </div>
                <div className="bg-neon-green p-4 rounded-full mt-3 shadow-2xl" onClick={() => setClicked(!clicked)}>
                    <img src="../../src/assets/icons/icon-dice.svg" />
                </div>
            </div>
        </>
    );
}

export default Contents;