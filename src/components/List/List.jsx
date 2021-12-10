import React from 'react'
import ListItem from '../ListItem/ListItem'
import './List.scss';

function List({ data, addItem }) {
    return (
        <div className="cards">
            {data.map(el => < ListItem
                key={el.id}
                name={el.name}
                price={el.price}
                addItem={addItem}
                element={el}
                img={el.img}
                id={el.id}
            />)}
        </div>
    )
}

export default List
