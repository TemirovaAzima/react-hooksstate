import {useState} from 'react'

 export const App = ()=>{
      const [kinolar, setKinolar]= useState([
          {id:1, title: 'InterStellar', rating:9},
          {id:2, title: 'Spiderman', rating:8},
          {id:3, title: 'Joker', rating:7}
      ])
     // const changeRating= ()=>setKino({...kino, rating: '7'})
     // const changeRating = ()=> setKino((prevKino)=>({...prevKino, rating:'4' }));
     // const changeTitle = ()=>setKinolar(kinolar.map((movie)=>(movie.id===2 ? {...movie, title: 'BatmanHehe'}: movie)))
     const changeTitle = ()=> setKinolar((prevKino)=>prevKino.map((movie)=> (movie.id===1? {...movie, title:'Jenniefer'}: movie)))
     return(
         <section>
             {kinolar.map((kino) => (
                 <div key={kino.id}>
                     <span>{kino.id} kino nomi: {kino.title}</span>
                     <span> kino rating :{kino.rating}</span>
                 </div>
             ))}
             <button onClick={changeTitle}>Change title</button>
         </section>
     )
 }