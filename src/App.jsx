import {useState} from 'react'

 export const App = ()=>{
     // const [number, setNumber]= useState(0)
     //
     // const increment = ()=> setNumber((prevNumBer)=> prevNumBer+1)
     // const decrement =()=> setNumber(number -1)
     const [increment, setIncrement]= useState(0)
     const [decrement, setDecrement] = useState(0)
      return(
          <section>
             {/*<h1>{number}</h1>*/}
             {/* <button onClick={increment}>increment {number}</button>*/}
             {/* <button onClick={decrement}>decrement {number}</button>*/}
              <button onClick={()=>setIncrement(increment+1)}>{increment}</button>
              <button onClick={()=> setDecrement(decrement-1)}>{decrement}</button>
          </section>
      )

 }