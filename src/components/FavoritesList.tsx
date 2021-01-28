import React, { Component } from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, IconButton, Paper
} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';

/**
 * This component is the primary page for listing the Favorites. It
 * lists the gists as a whole that have been favorited, and allows the user
 * to unfavorite if they choose to do so. The table lists the ID, description, 
 * owner, and URL for each favorited gist.
 */

const myStorage = window.localStorage;

export class FavoritesList extends Component<any, any>{
    constructor(props) {
        super(props)
        this.state = {
            favorites: '',
        }
        this.removeFavorites = this.removeFavorites.bind(this)
        this.fetchFavorites = this.fetchFavorites.bind(this)
    }

    saveFavorites(k?) {
        if (k) {
            myStorage.setItem('favorites', JSON.stringify(k));
        } else {
            myStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        }
        this.fetchFavorites();
    }

    removeFavorites(listItem) {
        let keys;
        const currentStorage = this.state.favorites
        if (currentStorage) {
            keys = currentStorage
            var removeIndex = keys.map(function (item) { return item.id; }).indexOf(listItem.id);
            keys.splice(removeIndex, 1)
            this.setState({ favorites: keys }, this.saveFavorites)
        } else {
            keys = [];
            return
        }
    }

    fetchFavorites() {
        const f = myStorage.getItem('favorites');
        let fave;
        if (f) {
            fave = JSON.parse(f)
        } else {
            fave = [];
        }
        this.setState({ favorites: fave });
    }

    componentDidMount() {
        this.fetchFavorites();
    }

    render() {
        return (
            <div className="Table">
                <h1>Favorites</h1>
                {this.state.favorites.length > 0 && (
                    <TableContainer component={Paper}>
                        <Table className={'table'} aria-label="simple table">
                            <TableHead className={'Table-Header'}>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">User</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">URL</TableCell>
                                    <TableCell align="right">Favorite</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.favorites.map((entry, index) => (
                                    <TableRow key={entry.id}>
                                        <TableCell component="th" scope="row">
                                            {entry.id}
                                        </TableCell>
                                        <TableCell align="right">{entry.owner.login}</TableCell>
                                        <TableCell align="right">{entry.description}</TableCell>
                                        <TableCell align="right"><a href={entry.html_url} target="_blank" rel="noreferrer">Click to open Gist.</a></TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={() => this.removeFavorites(this.state.favorites[index])}>
                                                <StarIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>)
    }
}
