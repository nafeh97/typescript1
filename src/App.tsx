import { useState } from 'react';

import './App.css';
import './typescript1';

var x = 'nafeh';

var y = x === 'nafeh' ? 10 : 0;

if (x === 'nafeh') {
  y = 10;
} else {
  y = 0;
}

// Un componente
// e' un insieme di logica, stili, e struttura
// incapsulata in un unico posto
// e riutilizzabile.

// contetti importanti
// 1. cos'e un componente
// 2. stato
// 3. il render
// 4. gli eventi
// 5. types (boolean, number ecc..)

type CounterProps = {
  initial: number;
}

const Counter = (props: CounterProps) => {
  const [state, setState] = useState(props.initial);

  const increase = () => {
    setState(state + 1)
  }

  const decrease = () => {
    setState(state - 1)
  }

  return (
    <div className={`counter ${state > 10 ? 'blue' : ''}`}>
      <button onClick={decrease}>-</button>
      <span>{state}</span>
      <button onClick={increase}>+</button>
    </div>
  )
};


const App = () => {
  return (
    <div>
      <Counter initial={0} />
      <Counter initial={10} />
      <Counter initial={20} />
      <Counter initial={30} />
      <Counter initial={40} />
    </div>
  )
}

export default App
