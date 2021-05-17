import React, {useState} from 'react';
import s from "./App.module.scss";
import {Counter} from "./component/Counter";


function App() {
   const [counter, setCounter] = useState<number>(0);

   const addIncrement = () => {
      let count = counter;
      count++
      setCounter(count);
   }

   const resetIncrement = () => {
      setCounter(0);
   }

   return (
      <div className={s.app}>
         <Counter
            counter={counter}
            addIncrement={addIncrement}
            resetIncrement={resetIncrement}
         />
      </div>
   );
}

export default App;
