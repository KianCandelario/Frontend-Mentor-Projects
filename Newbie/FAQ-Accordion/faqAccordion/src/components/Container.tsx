import Icon from './Icon.tsx';
import Contents from './Contents.tsx';

function Container() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-soft-violet-g to-soft-blue-g">
        <div className='h-full w-full flex justify-center items-center'>
          <Icon />
          <div className='w-[90%] h-[75%] flex items-end'>
            <Contents />
          </div>
        </div>
      </div>
    </>
  )
}

export default Container;
