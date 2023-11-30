import { useRef, useState } from "react"


const App = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');

  
  return (
    <div className="App">
      <input ref={inputRef} type='text'/>
      <button onClick={() => setInput(inputRef.current.value)}>asd</button>
      <p>{input}</p>
    </div>
  )
}

export default App