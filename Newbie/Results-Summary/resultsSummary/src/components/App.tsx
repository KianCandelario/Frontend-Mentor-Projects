import Result from './Result.tsx';
import SummaryContainer from './SummaryContainer.tsx';

function App() {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className=' rounded-3xl bg-slate-50 drop-shadow-2xl h-3/5 w-5/12 flex gap-7'>
          <Result />
          <SummaryContainer />
        </div>
      </div>
    </>
  )
}

export default App
