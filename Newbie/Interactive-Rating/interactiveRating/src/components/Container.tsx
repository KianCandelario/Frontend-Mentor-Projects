import Contents from './Contents.tsx';

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-very-dark-blue">
        <div className="h-[55%] w-[87%] sm:w-[50%] md:w-[45%] lg:w-[30%] 2xl:w-[23%] 2xl:h-[50%] bg-dark-blue rounded-2xl flex justify-center items-center">
          <Contents />
        </div>
      </div>
    </>
  )
}

export default App;
