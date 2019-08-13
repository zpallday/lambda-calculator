import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import {numbers} from "./data";
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const[numsArray,setNumsArray] = useState(numbers);
  console.log('numbers', {numsArray})
  return (
    <div>
    {numsArray.map((number, i) =>
      <NumberButton key={i} number={number} />
      )}
  </div>
);
};
export default Numbers;