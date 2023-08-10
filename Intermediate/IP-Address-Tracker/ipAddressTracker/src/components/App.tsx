import Head from './Head.tsx';
import Card from './Card.tsx';

function App() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="h-[40%] w-full relative">
          <Head />
          <Card />
        </div>
        <div className="h-[60%] w-full">

        </div>
      </div>
    </>
  )
}

export default App
