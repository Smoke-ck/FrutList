import React from 'react'
import ListItem from '../ListItem/ListItem'
import './List.scss';

function List({ data, addItem }) {
    return (
        <div className="cards">
            {data.map(el => < ListItem
                key={el.id}
                addItem={addItem}
                element={el}
            />)}
        </div>
    )
}

export default List
