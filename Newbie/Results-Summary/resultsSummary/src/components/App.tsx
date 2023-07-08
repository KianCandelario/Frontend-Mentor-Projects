import Result from './Result.tsx';
import SummaryContainer from './SummaryContainer.tsx';

function App() {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-pale-blue'>
        <div className='w-full h-full rounded-b-3xl flex flex-col bg-slate-50 sm:flex sm:flex-row sm:gap-1 sm:h-3/5 sm:w-4/5 sm:drop-shadow-2xl sm:rounded-3xl md:h-3/5 md:w-3/4 lg:w-3/5 lg:h-3/5 xl:w-1/2 xl:h-3/5 2xl:w-5/12 2xl:h-3/5'>
          <Result />
          <SummaryContainer />
        </div>
      </div>
    </>
  )
}

export default App
