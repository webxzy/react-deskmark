import React from 'react';
import './style.scss'

class ItemEditor extends React.Component {

	render() {

		let item = this.props.item || {title: '', content: ''};
		let saveHandel = () => {
			if (item.title === '') {
				return alert('标题不能为空');
			}
			this.props.saveItem(item);
		}

		let onChangeTitle = (e) => {
			item.title = e.target.value;
		}

		let onChangeContent = (e) => {
			item.content = e.target.value;
		}

		return (
			<div className="col-md-8">
				<div className="edit-area">
					<input type="text" placeholder="填写标题" className="input-group" onChange={onChangeTitle} defaultValue={item.title}/>
					<textarea placeholder="填写内容" className="" onChange={onChangeContent} defaultValue={item.content}></textarea>
				</div>
				<div className="control-area">
					<button className="btn btn-success" onClick={saveHandel}>保存</button>
					<button className="btn secondary" onClick={this.props.cancelCreateItem}>取消</button>
				</div>
			</div>
		)
	}
}

export default ItemEditor;