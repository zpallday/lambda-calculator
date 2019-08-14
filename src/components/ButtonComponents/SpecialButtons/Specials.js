    
import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";

//Import your array data to from the provided data file
import { specials } from "../../../data.js";

const Specials = numbers => {
  // STEP 2 - add the imported data to state
const [special, setSpecial] = useState(specials);



  return (
    <div className="specials-container">
      {special.map(special => (
        <SpecialButton
          key={special}
          special={special}
          handleInput={numbers.handleInput}
        />
      ))}
    </div>
  );
};

export default Specials;