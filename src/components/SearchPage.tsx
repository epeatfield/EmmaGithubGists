import { TextField, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Octokit } from '@octokit/rest';

const gg = new Octokit();

export default class SearchPage extends Component<any, any>{
    constructor(props) {
        super(props)
        this.state={
            username: '',
            favorites: [],
            fetchedList: [],
            showList: false
        }
    }
    handleChange(e) {
        this.setState({username: e.target.value})
    }
    handleClick(e) {
        e.preventDefault();
        this.getUsersGists();
    }
    getUsersGists() {
        gg.request(`GET /users/${this.state.username}/gists`, {
            username: this.state.username}).then((response: any) => {
                const listUser = response.data.filter(o => o.owner.login === this.state.username);
                this.setState({fetchedList: listUser, showList: true})
            })
    }
    render() {
        return (
            <div>
                <form className="Search-Bar">
                    <TextField 
                        id="outlined-basic" 
                        label="Enter User" 
                        variant="outlined" 
                        value={this.state.username} 
                        onChange={(e) => this.handleChange(e)} />
                    <Button className="Submit-Button" variant="contained" onClick={(e) => this.handleClick(e)}>Search</Button>
                </form>
            </div>
        )
    }
}
