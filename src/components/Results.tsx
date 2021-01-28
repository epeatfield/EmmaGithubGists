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
            filteredFavorites: []
        }

        this.filterUserFavorites = this.filterUserFavorites.bind(this)
    }

    favoriteResult(e, index) {
        if (this.inFavorites(this.state.fetchedList[index].id)) {
            this.removeFavoriteResult(this.state.fetchedList[index])
        } else {
            this.addFavoriteResult(this.state.fetchedList[index])
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
        let keys;
        const currentStorage = this.state.favorites
        if (currentStorage) { 
            keys = currentStorage
            var removeIndex = keys.map(function (item) { return item.id; }).indexOf(listItem.id);
            keys.splice(removeIndex, 1)
            this.setState({favorites: keys}, this.saveFavorites)
        } else { 
            keys = [];
            return 
        }
    }

    addFavoriteResult(listItem) {
        this.setState({ favorites: [...this.state.favorites, listItem] }, this.saveFavorites)
    }

    saveFavorites(k?) {
        if (k) {
            myStorage.setItem('favorites', JSON.stringify(k));
        } else {
            myStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        }
        this.props.fetch();
        this.filterUserFavorites();
    }

    filterUserFavorites() {
        const newList = this.state.favorites.filter(o => o.owner.login === this.state.user);
        this.setState({filteredFavorites: newList})
    }
    
    componentDidMount() {
        this.filterUserFavorites();
    }

    render() {
        return (
            <div>
                {(this.state.filteredFavorites.length > 0) && (
                    <div className="Table">
                        <h1>Favorites</h1>
                        <TableContainer component={Paper}>
                            <Table className={'table'} aria-label="simple table">
                                <TableHead className={'Table-Header'}>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">User</TableCell>
                                        <TableCell align="right">URL</TableCell>
                                        <TableCell align="right">Favorite</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.filteredFavorites.map(({ id, url, owner }) => (
                                        <TableRow key={id}>
                                            <TableCell component="th" scope="row">
                                                {id}
                                            </TableCell>
                                            <TableCell align="right"><a href={url}>{url}</a></TableCell>
                                            <TableCell align="right">{owner.login}</TableCell>
                                            <TableCell align="right">
                                                <IconButton>
                                                    {this.inFavorites(id) ? (<StarIcon />) : (<StarBorderIcon />)}
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
                {this.state.fetchedList.length > 0 && (
                    <div className="Table">
                        <h1>Results</h1>
                        <TableContainer component={Paper}>
                            <Table className={'table'} aria-label="simple table">
                                <TableHead className={'Table-Header'}>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">User</TableCell>
                                        <TableCell align="right">URL</TableCell>
                                        <TableCell align="right">Favorite</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.fetchedList.map((entry, index) => (
                                        <TableRow key={entry.id}>
                                            <TableCell component="th" scope="row">
                                                {entry.id}
                                            </TableCell>
                                            <TableCell align="right">{entry.owner.login}</TableCell>
                                            <TableCell align="right">{entry.url}</TableCell>
                                            <TableCell align="right">
                                                <IconButton id="fetchedList" onClick={(e) => this.favoriteResult(e, index)}>
                                                    {this.inFavorites(entry.id) ? (<StarIcon />) : (<StarBorderIcon />)}
                                                </IconButton></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )
                }
            </div>
        )
    }
}
