import React, { Component } from 'react';
import { 
    Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, IconButton, Paper
} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const myStorage = window.localStorage;

export default class Results extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            favorites: this.props.favoritesList,
            fetchedList: this.props.fetchedList,
        }
    }

    favoriteResult(e, index) {
        const listItem = this.state.fetchedList[index]
        if (this.inFavorites(listItem.id)) {
            this.removeFavoriteResult(listItem)
        } else {
            this.addFavoriteResult(listItem)
        }
    }

    inFavorites(id: string) { 
        for (let f of this.state.favorites) {
            if (f.id === id) {
                return true
            }
        }
        return false
    }

    removeFavoriteResult(listItem) {
        const currentFave = this.state.favorites;
        if (currentFave) {
            const removeIndex = currentFave.map(function(item) { 
                return item.id; 
            }).indexOf(listItem.id);
            currentFave.splice(removeIndex, 1);
            this.setState({favorites: currentFave}, this.saveFavorites)
        } else {
            return
        }
    }

    addFavoriteResult(listItem) {
        this.setState( { favorites: [...this.state.favorites, listItem] }, this.saveFavorites)
    }

    saveFavorites(k?) {
        if (k) {
            myStorage.setItem('favorites', JSON.stringify(k));
        } else {
            myStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        }
    }

    render() {
        return (
            <div>
                List! {this.state.user}
                {/* Show Favorites on top */}
                {this.state.favorites.length > 0 && (
                    <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">User</TableCell>
                            <TableCell align="left">Favorite</TableCell>
                        </TableHead>
                        <TableBody>
                            {this.state.favorites.map(({id, owner, url}) => (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {id}
                                    </TableCell>
                                    <TableCell align="left">{owner.login}</TableCell>
                                    <TableCell align="left">
                                        <IconButton>
                                            <StarIcon></StarIcon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                )}
                {/* Results in Total */}
                {this.state.fetchedList.length > 0 && (
                    <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">User</TableCell>
                            <TableCell align="left">Favorite</TableCell>
                        </TableHead>
                        <TableBody>
                            {this.state.fetchedList.map((entry, index) => (
                                <TableRow key={entry.id}>
                                    <TableCell component="th" scope="row">
                                        {entry.id}
                                    </TableCell>
                                    <TableCell align="left">{entry.owner.login}</TableCell>
                                    <TableCell align="left">
                                        <IconButton onClick={(e)=>this.favoriteResult(e, index)}>
                                            {this.inFavorites(entry.id) ? (<StarIcon/>) : (<StarBorderIcon/>)}
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                )}
            </div>
        )
    }
}
