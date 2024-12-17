import {useState} from 'react'

 export const App = ()=>{
    const [dostlar, setDostlar]= useState(['Lisa', 'Jennie'])
     const addFriend= ()=> setDostlar([...dostlar, 'Rosie'])
     const removeFriend = ()=> setDostlar(dostlar.filter((value)=> value !=='Rosie'))
     const friendUpdateInfo=()=>setDostlar(dostlar.map((value)=> (value==="Rosie")? 'Rosie Bruna Mars' : value))
    return (
        <section>
            {dostlar.map((dost)=>(
                <p key={Math.random()}>{dost}</p>
            ))}
            <button onClick={addFriend}>add new friend</button>
            <button onClick={removeFriend}>remove friend</button>
            <button onClick={friendUpdateInfo}>Friend update names</button>
        </section>
    )
 }