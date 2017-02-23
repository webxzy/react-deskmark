import React from 'react';
import List from '../List';
import CreateBar from '../CreateBar';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';
import Uuid from 'uuid';

class Deskmark extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				items: [{
					id: 1,
					title: '笔记1',
					content: '# 这是一个测试',
					time: '2016-10-29'
				}],
			selectedId: null,
			editing: false
		}
	}

	saveItem = (item) => {
		let items = this.state.items;
		if (item.id) {
			/* (这种写法实在太low了！！)
			for(var i=0; i<items.length; i++) {
				for(var attr in items[i]) {
					if (item.id === items[i][attr]) { items[i].content = item.content; items[i].title = item.title; break;}}}*/
			items = items.map(
				part => (part.id === item.id ? {...part, ...item} : part)
			);
		}
		else {
			const date = new Date();
			const time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
			var itemId = Uuid.v4();
			items = [...items, {...item, time: time, id: itemId}];
		}

		this.setState({
			items: items,
			editing: false,
			selectedId: item.id || itemId
		});
	}

	selectItem = (id) => {
		if (id === this.state.selectedId) {
			return;
		}
		this.setState({
			selectedId: id,
			editing: false
		});
	}

	createItem = () => {
		this.setState({
			editing: true,
			selectedId: null 
		});
	}

	cancelCreateItem = () => {
		this.setState({
			editing: false
		});
	}

	editItem = (selectedId) => {
		this.setState({
			editing: true,
			selectedId: selectedId
		})
	}

	deleteItem = (id) => {
		this.setState({
			items: this.state.items.filter(function (item) {
				return item.id !== id;
			})
		});
	}

	render() {
		let {items, selectedId, editing} = this.state;

		// 获取选择项
		const currentItem = selectedId && items.find(item => item.id === selectedId);

		// 把传参独立出来更优雅
		const ItemEditorAttr = {
			saveItem: this.saveItem,
			cancelCreateItem: this.cancelCreateItem,
			item: currentItem
		}

		const ItemShowLayerAttr = {
			item: currentItem,
			onDeleteItem: this.deleteItem,
			onEditItem: this.editItem
		}

		// 显示编辑页或展示页
		const showArea = editing ? <ItemEditor {...ItemEditorAttr} /> : <ItemShowLayer {...ItemShowLayerAttr} />;

		return (
			<section className="deskmark-component">
				<div className="container">
					<div className="row">
						<div className="col-md-4 list-group">
							<CreateBar createItem={this.createItem} />
							<List items={items} onSelectItem={this.selectItem} />
						</div>
						{showArea}
					</div>
				</div>
			</section>
		)
	}
}

export default Deskmark;