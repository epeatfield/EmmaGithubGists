import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from '../components/Results';
import { shallow, mount } from 'enzyme';
import { IconButton } from '@material-ui/core';

const testProps = {
    user: 'epeatfield',
    favoritesList: [],
    fetchedList: [
        {
            id: "123",
            owner: {
                login: "epeatfield"
            }
        },
        {
            id: "456",
            owner: {
                login: "epeatfield"
            }
        }
    ],
    fetch: jest.fn()
}

describe('<Results />', () => {
    const mt = shallow(<Results {...testProps}/>);

    it('Test Snapshot', () => {
        expect(mt).toMatchSnapshot();
    });

    it('Test Favoriting', () => {
        const button = mt.find('#fetchedList').at(0);
        button.simulate('click');
        expect(mt.state()["favorites"]).toEqual([{"id": "123", "owner": {"login": "epeatfield"}}])
    });

    it('Test UnFavoriting', () => {
        const button = mt.find('#fetchedList').at(0);        
        button.simulate('click');
        expect(mt.state()["favorites"]).toEqual([])
    });
});
