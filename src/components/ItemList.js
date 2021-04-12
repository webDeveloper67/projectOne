import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  return(
    <div>
    <p className="items">Items</p>
    <ol className="item">{items.map((item, index) => <Item key={index} item={item} />)}</ol>
    </div>
  )
}



export default ItemList;