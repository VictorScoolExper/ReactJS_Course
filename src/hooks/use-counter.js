import { useEffect, useState } from "react";

// When creating custom hooks you must use "use" at the begining of the name,
// the "use" tells react it will be a custom hook.
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        // Forward comes from our component that utilizes it 
        if(forwards){
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
      
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
//   We return counter or any other information
  return counter;
};

export default useCounter;
