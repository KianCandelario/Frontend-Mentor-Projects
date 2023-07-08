import Summary from './Summary.tsx';

function SummaryContainer() {
    return(
        <>
            <div className='sm:w-1/2 h-full mx-7 flex flex-col justify-center font-HankenGrotesk'>
                <div>
                    <div>
                        <h2 className='text-2xl font-bold text-dark-gray-blue'>Summary</h2>
                    </div>
                    <Summary />
                    <button className='w-full p-3 rounded-3xl text-white font-bold bg-dark-gray-blue active:bg-gradient-to-b from-light-slate-blue to-light-royal-blue'>Continue</button>
                </div>
            </div>
        </>
    );
}

export default SummaryContainer;