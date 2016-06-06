'use strict';

import React from 'react';
import {Link} from 'react-router';

class HomeView extends React.Component {

    componentWillMount() {
        this.props.getUsersList();
    }
    
    /**
     * @param  {e}
     * @return null
     */
    onClickDeleteUser(e) {
        e && e.preventDefault();
        if(confirm('Are you sure?')) {
            this.props.deleteUser(e.currentTarget.dataset.id);    
        }
    }

    render() {
        return <div>
                <h2>Home</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th colSpan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.user_list && this.props.user_list.map((row, i) => (
                            <tr key={i}>
                                <td>{row.name}</td>
                                <td>{row.job}</td>
                                <td><Link to={`/users/${row.id}`}>Show</Link></td>
                                <td><Link to={`/users/edit/${row.id}`}>Edit</Link></td>
                                <td><button onClick={this.onClickDeleteUser.bind(this)} data-id={row.id}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>;
        }
};

export default HomeView;
