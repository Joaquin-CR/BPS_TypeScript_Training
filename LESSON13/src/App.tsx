import { useCallback, useEffect, useState, MouseEvent, KeyboardEvent, useMemo, useRef } from 'react';

interface User {
  id: number,
  username: string,
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if(n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const myNum: number = 22;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  // SI users CAMBIA, SE EJECUTA L FUNCION useEffect
  useEffect(() => {
    console.log('Mounting');
    console.log('Users', users);
    return () => console.log('Unmounting');
  }, [users]);

  const addTow = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 1), []);
  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <>
      <div className='App'>
        <h1>{count}</h1>
        <button onClick={addTow}>Add</button>
        <h2>{result}</h2>
        <input type="text" ref={inputRef} />
      </div>
    </>
  )
}

export default App
