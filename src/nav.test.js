import React from "react";
import { render, screen, cleanup} from '@testing-library/react';
import Nav from "./nav";
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'
import { Router } from "react-router";


afterEach(()=> {
    cleanup();
});

const props = {
    match:{
        params: jest.fn(),
    }
  }

it("Should Render Nav Component", ()=> {
    const history = createMemoryHistory(['/', '/login']);
    render(
        <Router history={history}>
            <Nav {...props} history={history} />
        </Router>
    );
    const homeComponentId  = screen.getByTestId('tst-nav')
    expect(homeComponentId).toBeInTheDocument();
}); 


test('matches snapshot', ()=> {
    const history = createMemoryHistory(['/', '/login']);
    const tree = renderer.create(
    <Router history={history}>
        <Nav {...props} history={history} />
    </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
