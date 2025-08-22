import Header from './components/header.jsx'
import { Hero } from './components/hero.jsx'
import Footer from './components/footer.jsx'
import { useState } from 'react'

function App() {
  // let a=15;

  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Header />
      <Hero />
      oooooo
      <Footer /> */}
      {/* {a} */}
      {count}

      <button onClick={ function() {
        // a=a+1
        // console.log(a)
        setCount(count+1);
      }}>
        Click
      </button>
    </div>
  )
}

export default App
