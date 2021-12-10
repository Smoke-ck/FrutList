import React from 'react'

function BascetCard({ el, itemAction, removeFromBascet }) {
    
    return (
        <div className="bascet__card">
            <p className="bascet__card--title"> {el.name} </p>
            <div className="bascet__card--control">
                <button className="bascet__card--incDecButton" onClick={() => itemAction(el.id, 'increment')}>+</button>
                <p className="bascet__card--count">{el.count}</p>
                <button
                    className="bascet__card--incDecButton"
                    disabled={el.count > 1 ? false : true}
                    onClick={() => itemAction(el.id, 'decrement')}>-</button>
                <button onClick={() => removeFromBascet(el.id)}
                    className="bascet__card--control-clear">Remove</button>
            </div>
            <p className="bascet__card--price">Price: {el.allPrice} $</p>
        </div>
    )
}

export default BascetCard
