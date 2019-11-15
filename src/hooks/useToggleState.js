import { useState } from "react";

function useToggle(initialVal = false) {
  //call useState
  const [state, setState] = useState(initialVal);

  //return piece of state AND a function to toggle it
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggle;
