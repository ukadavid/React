import React, {useState} from 'react'
import ReactDom from 'react-dom'
import { Routes, Route, Link } from 'react-router-dom';

// About Page
function About (props){
  return(
    <section>
      <h2>About Page</h2>
      <link to='/about'>About Page</link>
    </section>
  )
}

// Home Page
function Home (props){
  return(
    <section>
      <h2>Home Page</h2>
      <link to='/'>Home Page</link>
    </section>
  )
}


function App (){
    const [count, setCount] = useState(0);
    return(
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />} />
      </Routes>
    )
}

export default App;
