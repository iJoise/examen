export const loadState = () => {
   try {
      const newMaxValue  = localStorage.getItem('maxValue');
      const newStartValue = localStorage.getItem('startValue');
      if (newMaxValue === null && newStartValue === null) {
         return undefined;
      }
      //@ts-ignore
      return JSON.parse(newMaxValue);
   } catch (err) {
      return undefined;
   }
};

export const saveState = (state: {maxValue: number, startValue:number}) => {
   try {
      const newMaxValue = JSON.stringify(state.maxValue);
      const newStartValue = JSON.stringify(state.startValue);
      localStorage.setItem('maxValue', newMaxValue);
      localStorage.setItem('startValue', newStartValue);
   } catch(err) {
      alert(err);
   }
};