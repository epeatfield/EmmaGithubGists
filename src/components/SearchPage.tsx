import { TextField, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Octokit } from '@octokit/rest';
import Results from './Results';

const gg = new Octokit();
const myStorage = window.localStorage; 

export default class SearchPage extends Component<any, any>{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            favorites: [],
            fetchedList: [],
            showList: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.fetchFavorites = this.fetchFavorites.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ username: e.target.value , showList: false })
    }

    handleClick(e) {
        e.preventDefault();
        this.getUsersGists();
    }

    getUsersGists() {
        gg.request(`GET /users/${this.state.username}/gists`, {
            username: this.state.username
        }).then((response: any) => {
            const listUser = response.data.filter(o => o.owner.login === this.state.username);
            this.setState({ fetchedList: listUser, showList: true })
        }).catch(err => alert(err))
    }

    componentDidMount() {
        this.fetchFavorites();
    }

    fetchFavorites() {
        let favorites;
        const f = myStorage.getItem('favorites');
        if (f) {
            favorites = JSON.parse(f)
        } else {
            favorites = [];
        }
        this.setState({favorites})
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
                {this.state.showList ? (
                    <Results 
                        user={this.state.username} 
                        favoritesList={this.state.favorites}
                        fetchedList={this.state.fetchedList}
                        fetch={this.fetchFavorites}
                    />) : null}
            </div>
        )
    }
}
