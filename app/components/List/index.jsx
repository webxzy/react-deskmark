import React from 'react';
import ListItem from '../ListItem';

function List({items, onSelectItem}) {
	items = items.map(item => (<ListItem item={item} key={item.id} onClick={() => onSelectItem(item.id)}/>));
	return (<div className="list-conponent">{items}</div>);
}

export default List;