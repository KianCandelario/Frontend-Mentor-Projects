import Result from './Result.tsx';
import SummaryContainer from './SummaryContainer.tsx';

function App() {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='h-4/6 w-1/2 rounded-3xl bg-slate-50 flex gap-7'>
          <Result />
          <SummaryContainer />
        </div>
      </div>
    </>
  )
}

export default App
