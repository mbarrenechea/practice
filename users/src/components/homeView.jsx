'use strict';

import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {

    componentWillMount(){
        this.props.init();
    }

    render(){
        return <div>

                <h2>Home</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.repositories && this.props.repositories.map((row, i) => (
                            <tr key={i}>
                                <td>{row.name}</td>
                                <td>{row.full_name}</td>
                                <td>
                                    <Link to={`/detail/${row.id}`}>Detail</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>;
        }
};

export default Home;
