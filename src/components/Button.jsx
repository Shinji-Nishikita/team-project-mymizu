import React from 'react'

export default function Button(props) {
    const attack = (e) => {
        let size;
        e.target.style.background = "#7BA4B8";
        if (props.AttackAmount === 350) {
            size = 1;
        } else if (props.AttackAmount === 500) {
            size = 2;
        } else if (props.AttackAmount === 750) {
            size = 3;
        }
        props.setSize(size)
    };

    return (
        <button
            style={{ background: "" }}
            onClick={(e) => { attack(e) }}
        >{props.AttackAmount}</button>
    )
}