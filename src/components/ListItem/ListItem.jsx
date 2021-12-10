import React from 'react';
import './ListItem.scss';

function ListItem({ name, price, addItem, element, img, id }) {

    const addToBascet = () => {
        addItem(element)
    }

    if (id === 3) {
        return <div className="card">
            <p className="card__discount">Every third kilogram with a discount 50%</p>
            <img src={img} alt={name} className="card__image" />
            <p className="card__title"> {name} </p>
            <p className="card__price">{price} $</p>
            <button
                className="card__button"
                onClick={() => addToBascet()}
                disabled={element.inStock ? true : false}>Add to cart
            </button>
            {element.inStock
                    ? <p className="card__added">Added to cart</p>
                    : ''}
        </div>
    } else {
        return (
            <div className="card">
                <img src={img} alt={name} className="card__image" />
                <p className="card__title"> {name} </p>
                <p className="card__price">{price} $</p>
                <button
                    className="card__button"
                    onClick={() => addToBascet()}
                    disabled={element.inStock ? true : false}>Add to cart
                </button>
                {element.inStock
                    ? <p className="card__added">Added to cart</p>
                    : ''}
            </div>
        )
    }
}

export default ListItem
