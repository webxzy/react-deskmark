import React from 'react';
import './style.scss';

function CreateBar({createItem}) {
	return (
		<a href="javascript:;" onClick={createItem} className="list-group-item create-bar-component">+ 创建新的文章</a>
	)
}

export default CreateBar;