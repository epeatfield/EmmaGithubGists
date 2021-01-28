import { TextField, Button } from '@material-ui/core';
import React, { Component } from 'react';

export default class SearchPage extends Component<any, any>{
    constructor(props) {
        super(props)
        this.state={
            username: '',
            favorites: [],
            fetchedList: [],
        }
    }
    handleChange(e) {
        this.setState({username: e.target.value})
    }
    handleClick(e) {
        //Get Users
    }
    render() {
        return (
            <div>
                <form>
                    <TextField 
                        id="outlined-basic" 
                        label="Enter User" 
                        variant="outlined" 
                        value={this.state.username} 
                        onChange={(e) => this.handleChange(e)} />
                    <Button onClick={(e) => this.handleClick(e)}>Search</Button>
                </form>
            </div>
        )
    }
}
