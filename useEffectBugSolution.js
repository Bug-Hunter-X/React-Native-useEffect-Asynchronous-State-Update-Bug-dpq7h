The solution involves using the `useState`'s updater function or ensuring that state updates happen only after the asynchronous operation completes.  The correct way is to update state using the `setCounter` function directly or using Promise.then() after a fetch is complete.

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const updateCounter = async () => {
      // Simulate an asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCounter(prevCounter => prevCounter + 1); // Correct way
    };
    updateCounter();
  }, []);

  return (
    <View>
      <Text>Counter: {counter}</Text>
    </View>
  );
};

export default MyComponent;
```