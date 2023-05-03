import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ marginTop: '25px' }}>
      <p>Текущий счет: {count}</p>
      <button onClick={increase}>Увеличить</button>
      <button onClick={decrease}>Уменьшить</button>
    </div>
  );
};

export default Counter;
