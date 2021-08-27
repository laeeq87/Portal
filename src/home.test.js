import React from "react";
import { render, screen, cleanup} from '@testing-library/react';
import Home from "./home";
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

it("Should Render Home Component", ()=> {
    const history = createMemoryHistory(['/', '/login']);
    render(
        <Router history={history}>
            <Home {...props} history={history}/>
        </Router>
    );
    const homeComponentId  = screen.getByTestId('tst-home')
    expect(homeComponentId).toBeInTheDocument();
}); 


it("Should Verify Render Nav In Home Component", ()=> {
    const history = createMemoryHistory(['/', '/login']);
    render(
        <Router history={history}>
            <Home {...props} history={history}/>
        </Router>
    );
    const homeComponentId  = screen.getByTestId('tst-home-nav')
    expect(homeComponentId).toBeInTheDocument();
    expect(homeComponentId).toHaveClass('col-11');
}); 

test('matches snapshot', ()=> {
    const history = createMemoryHistory(['/', '/login']);
    const tree = renderer.create(
        <Router history={history}>
            <Home {...props} history={history}/>
    </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
