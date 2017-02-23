import React from 'react';
import Marked from 'marked';
import './style.scss';

function ItemShowLayer({item, onEditItem, onDeleteItem}) {
	if (!item || !item.id) {
		return (
			<div className="col-md-8 item-show-layer-component">
				<div className="no-select">请选择左侧列表里面的文章</div>
			</div>
		);
	}
	const content = Marked(item.content);
	return (
		<div className="col-md-8 item-show-layer-component">
			<h2>{item.title}</h2>
			<div className="item-text">
				<div dangerouslySetInnerHTML={{__html: content}} />
			</div>
			<div className="control-area">
				<button className="btn btn-primary" onClick={() => onEditItem(item.id)}>编辑</button>
				<button className="btn btn-danger" onClick={() => onDeleteItem(item.id)}>删除</button>
			</div>
		</div>

	)
}

export default ItemShowLayer;