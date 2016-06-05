'use strict';

import React from 'react';

class EditView extends React.Component {

    componentWillMount(){
      this.props.getUserDetail(this.props.params.id);
    }

    onSubmitNewUser(e) {
    	e && e.preventDefault();
    	var user = this.props.user_show;
    	var currentUser = Object.assign({}, user, this.serialize(e.currentTarget));
    	this.props.updateUser(currentUser);
    }

		serialize(form) {
			if (!form || form.nodeName !== "FORM") {
				return;
			}
			var i, j,
				obj = {};
			for (i = form.elements.length - 1; i >= 0; i = i - 1) {
				if (form.elements[i].name === "") {
					continue;
				}
				switch (form.elements[i].nodeName) {
				case 'INPUT':
					switch (form.elements[i].type) {
					case 'text':
					case 'hidden':
					case 'password':
					case 'button':
					case 'reset':
					case 'submit':
						obj[form.elements[i].name] = form.elements[i].value;
						break;
					case 'checkbox':
					case 'radio':
						if (form.elements[i].checked) {
							obj[form.elements[i].name] = form.elements[i].value;
						}
						break;
					case 'file':
						break;
					}
					break;
				case 'TEXTAREA':
					obj[form.elements[i].name] = form.elements[i].value;
					break;
				case 'SELECT':
					switch (form.elements[i].type) {
					case 'select-one':
						obj[form.elements[i].name] = form.elements[i].value;
						break;
					case 'select-multiple':
						for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
							if (form.elements[i].options[j].selected) {
								obj[form.elements[i].name] = form.elements[i].options[j].value;
							}
						}
						break;
					}
					break;
				case 'BUTTON':
					switch (form.elements[i].type) {
					case 'reset':
					case 'submit':
					case 'button':
						obj[form.elements[i].name] = form.elements[i].value;
						break;
					}
					break;
				}
			}
			return obj;
		}    

    render(){
			return <div>
			  <h2>Edit</h2>
			  <form onSubmit={this.onSubmitNewUser.bind(this)}>
			  	<input type="text" name="name" defaultValue={this.props.user_show && this.props.user_show.name}/>
			  	<button type="submit">Update</button>
			  </form>
			</div>;
		}
};

export default EditView;
