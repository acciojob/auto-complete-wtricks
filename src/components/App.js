
import React from "react";
import './../styles/App.css';

const App = () => {
  const [list, setList] = React.useState([
    "apple", 
    "banana", 
    "cherry", 
    "date", 
    "elderberry", 
    "fig"
  ])

  const input = React.useRef()
  const ref = React.useRef()
  const [ans, setAns] = React.useState(list)

  const onChange = () => {
    clearTimeout(ref.current)
    ref.current = setTimeout(() => {
      if (input.current.value == '') {
        setAns(list)
        return
      }
      const regex = new RegExp('^' + input.current.value)
      setAns(p => p.filter(t => regex.test(t)))
    }, 10)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Search item</h2>
        <input ref={input} onChange={onChange} type="text" placeholder="Search" name="input" />

        <ul>
          {ans.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    </div>
  )
}

export default App
