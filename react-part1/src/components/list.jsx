'use strict';

import React from 'react';
import Item from './item';

class List extends React.Component {

    constructor(props){
        super(props);
    }
    shouldComponentUpdate(nextProps) {
     // instead of object deep comparsion
     return this.props.items !== nextProps.items;
    }

    render(){
        var list = [];

        this.props.items.forEach(function(item, index){
            list.push(<Item key={index} item={item}></Item>);
        });

        return <ul>
            {list}
        </ul>;
    }
}

List.propTypes = { items: React.PropTypes.array.isRequired };
export default List;
