'use strict';

import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <li>
            {this.props.item.name}
        </li>;
    }
}

Item.propTypes = {
    item: React.PropTypes.shape({name: React.PropTypes.string})
};

export default Item;
