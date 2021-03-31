import React from 'react'

export default function Button({AttackAmount}) {
    return (
        <button style={{color:"green"}}onClick={(e)=>{e.target.style.color="red"}}>{AttackAmount}</button>
    )
}
