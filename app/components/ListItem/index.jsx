import React, {PropTypes} from 'react';

const propTypes = {
	item: PropTypes.object.isRequired
}

const style = {
	float: 'right'
}

function ListItem({item, onClick}){
	return (
		<a href="#" className="list-group-item item-conponent" onClick={onClick}>
			<span className="label label-default label-pill pull-xs-right" style={style}>{item.time}</span>
			{item.title}
		</a>
	);
}

ListItem.PropTypes = PropTypes;

export default ListItem;