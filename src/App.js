import React, {useState} from 'react'
import ReactDom from 'react-dom'

// Card task
function Card (props){
 
}



function App (){
    const [count, setCount] = useState(0);
    return(
      <section>
          <h1> count:{count}</h1>
          <button onClick={() => setCount(count+1)}>Increment</button>
          <button onClick={() => setCount(count-1)}>decrement</button>
      </section>
    )
}

export default App;
