export const loadState = () => {
   try {
      const newMaxValue = localStorage.getItem('maxValue');
      const newStartValue = localStorage.getItem('startValue');
      if (newMaxValue === null && newStartValue === null) {
         return {
            maxValue: 5,
            startValue: 0,
         }
      }
      if (newMaxValue && newStartValue) {
         const maxValue = JSON.parse(newMaxValue);
         const startValue = JSON.parse(newStartValue);
         return {
            maxValue,
            startValue,
         }
      }
   } catch (err) {
      return undefined;
   }
};

export const saveState = (state: { maxValue: number, startValue: number }) => {
   try {
      const newMaxValue = JSON.stringify(state.maxValue);
      const newStartValue = JSON.stringify(state.startValue);
      localStorage.setItem('maxValue', newMaxValue);
      localStorage.setItem('startValue', newStartValue);
   } catch (err) {
      alert(err);
   }
};