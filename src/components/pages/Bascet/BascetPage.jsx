import React from 'react'
import { useNavigate } from "react-router-dom";
import BascetCard from './BascetCard';
import './BascetPage.scss';

function BascetPage({ list, deleteItem, itemAction }) {

    const allPrice = list.reduce((total, obj) => obj.allPrice + total, 0)

    let history = useNavigate();
    
    const onBackClick = () => {
        history(-1);
    }

    const removeFromBascet = (id) => {
        deleteItem(id)
    }

    return (
        <div className="bascet">
            <div className="bascet__cards">
                {list.map(el => <BascetCard key ={el.id} el={el} itemAction={itemAction} removeFromBascet={removeFromBascet} />)}
            </div>
            <p className="bascet__allPrice">Subtotal: {allPrice} $</p>
            <button onClick={onBackClick}
                className="bascet__back card__button">Back to list</button>
        </div>
    )
}

export default BascetPage
