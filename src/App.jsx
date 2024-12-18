import {useState} from 'react'

 export const App = ()=>{
      const [kino, setKino]= useState({
          title: "InterStellel",
          rating: "9"
      })
     // const changeRating= ()=>setKino({...kino, rating: '7'})
     const changeRating = ()=> setKino((prevKino)=>({...prevKino, rating:'4' }));
     return(
         <section>
             <h1>Kino nomi: {kino.title}</h1>
             <p>Kino rating: {kino.rating}</p>
             <button onClick={changeRating}>Changge ratinghe</button>
         </section>
     )
 }