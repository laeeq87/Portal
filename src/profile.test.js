import React from "react";
import { render, screen, cleanup} from '@testing-library/react';
import Profile from "./profile";
import { createMemoryHistory } from 'history'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { Router } from "react-router";

afterEach(()=> {
    cleanup();
});

const props = {
    match:{
        params: jest.fn(),
    }
  }

it("Should Render Porfile Component", ()=> {
    const history = createMemoryHistory(['/', '/login']);
    render(
        <Router history={history}>
            <Profile {...props} history={history}/>
        </Router>
    );
    const profileComponentId  = screen.getByTestId('tst-profile')
    expect(profileComponentId).toBeInTheDocument();
}); 


test('matches snapshot', ()=> {
    const history = createMemoryHistory(['/', '/login', '/account']);
    const tree = renderer.create(
        <Router history={history}>
            <Profile {...props} history={history}/>
    </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
