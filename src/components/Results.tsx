import React, { Component } from 'react';

export default class Results extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            favorites: this.props.favoritesList,
            fetchedList: this.props.fetchedList,
        }
    }
    render() {
        return (
            <div>List! {this.state.user}</div>
        )
    }
}
