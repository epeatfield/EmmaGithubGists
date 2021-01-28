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
    render() {
        return (
            <div>
                List! {this.state.user}
                {/* Show Favorites on top */}
                {this.state.favorites.length > 0 && (
                    <TableContainer>
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
                                    <TableCell align="center">{owner.login}</TableCell>
                                    <TableCell align="center">
                                        <IconButton>
                                            <StarBorderIcon></StarBorderIcon>
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
                    <TableContainer>
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
                                        <IconButton>
                                            <StarBorderIcon></StarBorderIcon>
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
