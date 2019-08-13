import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import {specials} from "../../../data.js";
import SpecialButton from "./SpecialButton";
const Specials = () => {
  // STEP 2 - add the imported data to state
const [specialsState, setSpecialState] = useState(specials);
  return (
    <div>
      {specialsState.map((special, i) =>
        <SpecialButton key={i} special={special}/>
        )}
    </div>
  );
};
export default Specials;