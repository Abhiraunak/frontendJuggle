
import { Heading } from "../Components/heading";
import { Button } from "../Components/button";
import {
    RecoilRoot,
    atom,
    useRecoilValue,
    useSetRecoilState,
  } from 'recoil';
  


export default function Propdrilling(){
    
    return (
        <RecoilRoot>
            <div className="bg-indigo-500 h-screen flex justify-center">
                <div className="pt-20">
                    <div className="rounded-lg bg-indigo-300 text-center p-2 h-max px-4">
                        <Heading label="Welcome to the counter game" />
                        <div className="pt-4">
                            <Buttons />
                        </div>
                        <CountComponents />
                    </div>
                </div>
            </div>
        </RecoilRoot>
    )
}

function Buttons(){
    return (
        <div className="flex justify-between">
            <Increase />
            <Decrease />
        </div>
    )
}
function Increase() {
    const setCount = useSetRecoilState(countState)
    function handleIncreaseClick() {
        setCount(existingCount => existingCount + 1);
    }
  
    return (
      <div>
        <Button label="Increase" onClick={handleIncreaseClick} />
      </div>
    );
  }
  function Decrease() {
    const setCount = useSetRecoilState(countState)
    function handleDecreaseClick() {
      setCount((existingCount) => existingCount - 1);
    }
    return (
      <div>
        <Button label="Decrease" onClick={handleDecreaseClick} />
      </div>
    );
  }

  function CountComponents(){
    const count = useRecoilValue(countState);
    return (
        <div>
            {count}
        </div>
    )
  }

  const countState = atom ({
    key: 'countState',
    default: 0,
  });
